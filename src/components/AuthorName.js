import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import React from 'react';
import authors from '../data/authors.json';

export default function AuthorName({ authorID }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let author = authors.filter(author => author.id === authorID);

  author = author[0] ? author[0] : {};
  let authorName;
  if (author.name) authorName = author.name;
  else authorName = 'DeDiabetes';

  return (
    <>
      <button
        className={clsx(
          authorName !== 'DeDiabetes' && 'text-base cursor-pointer hover:text-black',
          'text-base text-gray-800 underline hover:text-red-800'
        )}
        onClick={authorName !== 'DeDiabetes' ? handleClickOpen : null}
      >
        {authorName}
        {author.certifications ? `, ${author.certifications}` : ''}
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="Sobre el Autor"
      >
        <DialogTitle id="responsive-dialog-title">
          Sobre el Autor
          <DialogActions>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              style={{
                position: 'absolute',
                right: theme.spacing(1),
                top: theme.spacing(1),
                color: theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </DialogTitle>

        <DialogContent>
          <p>
            {authorName}, {author.certifications ? author.certifications : ''}
          </p>
          <p className="my-5">{author.descriptionShort}</p>
          <a
            href={`/autores/${author.slug}`}
            className="hover:text-black underline"
          >
            Mas Información
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
}
