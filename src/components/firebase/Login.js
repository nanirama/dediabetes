import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import useFirebase from './useFirebase';

const StyledButton = styled.button`
  padding: 12px;
  color: white;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: capitalize;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  width: 3.375rem;
  margin: ${props => (props.mobile ? '12px' : '0')};
  box-shadow: 0 13px 7px -15px rgb(50 50 93 / 25%),
    0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
  justify-self: center;

  :hover,
  :focus {
    background-color: rgba(0, 0, 0, 0.3);
    outline: none;
  }

  @media (max-width: 700px) {
    display: ${props => (props.mobile ? 'block' : 'none')};
  }
`;

const StyledCtaButtons = styled(StyledButton)`
  background-color: ${props => (props.disabled ? '#9a9596' : '#b70610')};
  width: auto;
  border-radius: 11px;
  padding: 8px 12px;
  margin: 24px 0 16px;
  display: block;

  :hover,
  :focus {
    background-color: ${props => (props.disabled ? '#9a9596' : '#920008')};
    outline: none;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 24px;
  display: block;
`;

const StyledInput = styled.input`
  border: 1px solid #b70610;
  font-size: 1rem;
  padding: 8px 12px;
  font-family: inherit;
  max-width: 400px;
  width: 100%;
  border-radius: 3px;

  :focus,
  :hover {
    border-color: #920008;
  }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login({ mobile }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { firebase, auth, db } = useFirebase();

  const getEmail =
    (typeof window !== 'undefined' &&
      window.localStorage.getItem('emailForSignIn')) ||
    '';
  const [email, setEmail] = useState(getEmail);
  const [signInStage, setSignInStage] = useState('unknown');
  const [emailChange, setEmailChange] = useState(false);

  React.useEffect(() => {
    let savedEmail = window.localStorage.getItem('emailForSignIn');

    const emailLink = window.location.href;
    if (window.history.pushState) {
      const newUrl = window.location.origin + window.location.pathname;
      window.history.pushState({ path: newUrl }, '', newUrl);
    }

    const setEmailChangeState = msg => {
      setEmailChange(msg);
      setTimeout(() => {
        setEmailChange(false);
      }, 3000);
    };

    const unregisterAuth = auth.onAuthStateChanged(user => {
      if (user) {
        // this is for changing email
        if (emailLink.includes('changeEmail')) {
          const credential = firebase.auth.EmailAuthProvider.credentialWithLink(
            window.localStorage.getItem('emailForSignIn'),
            emailLink
          );

          let newEmailChange =
            window.localStorage.getItem('emailForChange') || null;
          if (!newEmailChange) {
            newEmailChange = window.prompt(
              'Please provide your new email address.'
            );

            window.localStorage.setItem('emailForChange', newEmailChange);
          }
          user
            .reauthenticateWithCredential(credential)
            .then(() => {
              user.updateEmail(newEmailChange).then(() => {
                window.localStorage.setItem('emailForSignIn', newEmailChange);
                window.localStorage.removeItem('emailForChange');
                setEmail(newEmailChange);
              });
            })
            .catch(e => {
              if (e.code === 'auth/invalid-action-code') {
                setEmailChangeState('codeError');
              }
              if (e.code === 'auth/email-already-in-use') {
                setEmailChangeState('emailError');
              }
            });
        }
        setSignInStage('loggedIn');
      } else {
        //check if user opened reauthenticate link on new device or browser session
        if (emailLink.includes('changeEmail')) {
          window.alert(
            'You opened changing email address link on a new device or browser session. Please open this link where you changed your email address'
          );
          setSignInStage('loggedOut');
          return;
        }
        // this is for sign in from email link
        if (auth.isSignInWithEmailLink(emailLink)) {
          if (!savedEmail) {
            savedEmail = window.prompt(
              'Please provide your old email address for confirmation'
            );
          }
          auth
            .signInWithEmailLink(savedEmail, emailLink)
            .then(result => {
              const userRef = db.collection('users').doc(result.user.uid);
              userRef.get().then(doc => {
                if (!doc.exists) {
                  db.collection('users').doc(result.user.uid).set({
                    posts: [],
                    recipes: [],
                  });
                }
              });
              window.localStorage.setItem('emailForSignIn', savedEmail);
              setEmail(savedEmail);
              setSignInStage('loggedIn');
            })
            .catch(e => {
              if (e.code === 'auth/invalid-action-code') {
                setEmailChangeState('codeError');
              }
            });
        } else setSignInStage('loggedOut');
      }
    });

    return () => {
      unregisterAuth();
    };
  }, [auth, db, firebase]);

  // this is email address input on change function
  const updateEmail = e => {
    setEmail(e.target.value);
    if (emailChange || emailChange === null) {
      setEmailChange(false);
    }
    if (signInStage === 'emailSent') {
      setSignInStage('loggedOut');
    }
  };

  // firebase change email function
  const changeEmail = e => {
    e.preventDefault();
    const user = auth.currentUser;
    if (email === user.email) {
      setEmailChange(null);
      return;
    }
    window.localStorage.setItem('emailForChange', email);

    auth
      .sendSignInLinkToEmail(window.localStorage.getItem('emailForSignIn'), {
        url: `${window.location.href}?changeEmail=true`,
        handleCodeInApp: true,
      })
      .then(() => {
        setEmailChange('inProcess');
      });
  };

  const login = e => {
    e.preventDefault();
    auth
      .sendSignInLinkToEmail(email, {
        url: window.location.href,
        handleCodeInApp: true,
      })
      .then(() => {
        setSignInStage('emailSent');
      });
  };

  const logout = () => {
    auth.signOut();
    setSignInStage('loggedOut');
    setOpen(false);
  };

  return (
    <>
      {emailChange === 'completed' && (
        <div
          style={{
            backgroundColor: 'lightgreen',
            color: 'white',
            padding: '5px 10px',
            position: 'absolute',
            top: '0',
            transform: 'translate(-50%, 0%)',
            left: '50%',
            zIndex: '2000',
          }}
        >
          Your email address changed successfully.
        </div>
      )}
      {emailChange === 'codeError' ||
        (emailChange === 'emailError' && (
          <div
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '5px 10px',
              position: 'absolute',
              top: '0',
              transform: 'translate(-50%, 0%)',
              left: '50%',
              zIndex: '2000',
            }}
          >
            {emailChange === 'codeError'
              ? 'You used invalid link. Please check your email for new email or click on change email button again.'
              : 'The email address is already in use by another account.'}
          </div>
        ))}
      {signInStage === 'unknown' ? (
        ''
      ) : (
        <StyledButton
          aria-label="open"
          onClick={handleClickOpen}
          mobile={mobile}
          style={{ justifySelf: 'right' }}
        >
          {signInStage === 'loggedIn' ? (
            auth.currentUser.email[0]
          ) : (
            <AccountCircleIcon />
          )}
        </StyledButton>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby={signInStage === 'loggedOut' ? 'Login' : 'Your Profile'}
      >
        <DialogTitle id="responsive-dialog-title">
          {signInStage === 'loggedOut' ? 'Iniciar sesión / Unete' : 'Tu Cuenta'}
          <DialogActions>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              style={{
                position: 'absolute',
                right: '8px',
                top: '9px',
                color: 'rgb(158, 158, 158)',
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </DialogTitle>

        <DialogContent>
          {signInStage === 'loggedIn' ? (
            <>
              <StyledLink to="/perfil" className="hover:text-themeBrandColor">
                Ve tus Favoritos
              </StyledLink>
              <form onSubmit={changeEmail}>
                <label htmlFor="newEmail" style={{ fontWeight: 700 }}>
                  Ingrese nueva dirección email:
                </label>
                <StyledInput
                  id="newEmail"
                  type="email"
                  value={email}
                  onChange={updateEmail}
                  required
                />
                <StyledCtaButtons
                  type="submit"
                  disabled={emailChange}
                  style={{ display: 'block' }}
                >
                  Cambie Email
                </StyledCtaButtons>

                {emailChange
                  ? emailChange === 'inProcess' && (
                      <p style={{ maxWidth: '400px' }}>
                        Revisa tu antigua dirección de correo electrónico para
                        confirmarla.
                      </p>
                    )
                  : emailChange === null && (
                      <p style={{ maxWidth: '400px' }}>
                        Ingresó su antigua dirección de correo electrónico. Por
                        favor ingrese nueva dirección de correo electrónico.
                      </p>
                    )}
              </form>
              <StyledCtaButtons onClick={logout}>
                Terminar sesión
              </StyledCtaButtons>
            </>
          ) : (
            <form onSubmit={login}>
              <label htmlFor="email" style={{ fontWeight: 700 }}>
                Ingrese su Correo Electrónico:
              </label>
              <StyledInput
                id="email"
                type="email"
                value={email}
                onChange={updateEmail}
                required
              />

              <StyledCtaButtons
                type="submit"
                disabled={signInStage === 'emailSent'}
              >
                Iniciar / Terminar
              </StyledCtaButtons>

              {signInStage === 'emailSent' && (
                <p style={{ maxWidth: '400px' }}>
                  Verifique su dirección de correo electrónico y haga click en
                  el enlace de inicio de sesión.
                </p>
              )}
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
