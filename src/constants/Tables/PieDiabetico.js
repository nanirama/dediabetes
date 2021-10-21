import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(grado, lesion) {
  return { grado, lesion };
}

const rows = [
  createData("0", "Piel Intacta con riesgo (hiperqueratosis, callos, fisuras...), pero sin lesiones"),
  createData("1","Ulcera superficial de piel o tejido subcutáneo (destrucción del espesor total de la piel; generalmente, se afecta la superficie plantar del pie, sobre la cabeza de los metatarsianos o espacios interdigitales)"),
  createData("2","Las úlceras se extienden hacia el tendón, el hueso o la cápsula. Úlcera profunda, con afección de tendones, ligamentos y músculos, pero sin abscesos ni lesiones oseas"),
  createData("3","Ulcera profunda acompañada de celulitis, absceso u osteitis"),
  createData("4","Gangrena parcial y localizada del pie (necrosis, generalmente en el talón, los dedos o las zonas distales del pie"),
  createData("5","Gangrena del pie integral (todo el pie afectado; efectos sistémicos"),
];

export const PieDiabetico = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" className="bg-gray-200 font-bold">Grado</TableCell>
            <TableCell align="center" className="font-bold">Lesión</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="center" className="bg-gray-200">
                {row.grado}
              </TableCell>
              <TableCell>{row.lesion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
