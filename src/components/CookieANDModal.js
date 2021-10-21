import React from 'react';
import Modal from './Modal';
import Subscribe from './Subscribe';

export default function CookieANDModal() {
 

  return (
    <>
      <Modal>
        <Subscribe />
      </Modal>
      {/* <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        declineButtonText="Decline"
        style={{ background: '#b70610' }}
        cookieName="gatsby-gdpr-google-analytics"
        hideOnAccept
        onAccept={() => initializeAndTrack(location)}
      >
        Esta web utiliza cookies para mejorar la experiencia de navegación. Al
        estar por aquí, aceptas su uso. Si quieres más información:
        <span className="text-white hover:underline">
          <Link to="/aviso-legal-politica-privacidad">
            &nbsp;Politica de Privacidad
          </Link>
        </span>
      </CookieConsent> */}
    </>
  );
}
