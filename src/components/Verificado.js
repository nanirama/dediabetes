import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function Verificado() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className="border-2 border-themeBrandColor rounded hover:bg-themeBrandColor text-themeBrandColor hover:text-white px-2 text-sm italic leading-none m-0 mt-4 sm:ml-3 sm:mt-0 self-center py-1 hover:shadow-md inline-block cursor-pointer outline-none "
        onClick={handleClickOpen}
      >
        Verificado
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="Información Verificada"
      >
        <DialogTitle id="responsive-dialog-title">
          Información Verificada
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
          <DialogContentText>
          <p>DeDiabetes se compromete a brindar artículos que cuentan con el aval y han sido revisados por nuestro comité de integridad.</p>

<p>Esto significa que cada texto publicado e identificado con "artículo validado" cumple con:</p>

<ul className="list-disc">

<li>
Alto Nivel Editorial: contenido se adhiere a las normas editoriales más altas de precisión, calidad de sus fuentes y objetividad de análisis.
</li>

<li>
Rigor Científico: todos los estudios de referencia y los documentos de investigación deben ser de revistas o asociaciones académicas revisadas por pares acreditadas y relevantes.

</li>

<li>
Referencias: Todos los estudios, citas y estadísticas utilizadas en un artículo de noticias deben enlazar o hacer referencia a la fuente original. El artículo también debe indicar claramente por qué las estadísticas presentadas son relevantes.

</li>

</ul>




          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
