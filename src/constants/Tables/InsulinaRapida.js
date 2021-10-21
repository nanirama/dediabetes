import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(insulina, iniaccion, picoaccion, duration) {
  return { insulina, iniaccion, picoaccion, duration };
}

const rows = [
  createData("Insulina regular (Cristalina)", "30 minutos", "2-4 horas", "6-8 horas"),
  createData("Análogos de insulina (Aspart, Lyspro, Glulisina)", "5 a 15 minutos", "1 a 2 horas", "4-6 horas"),
];

export const InsulinaRapida = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className="bg-gray-200">
          <TableRow>
            <TableCell align="center">Insulina</TableCell>
            <TableCell align="center">Inicio de acción</TableCell>
            <TableCell align="center">Pico de acción</TableCell>
            <TableCell align="center">Duración máxima de acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.insulina}
              </TableCell>
              <TableCell>{row.iniaccion}</TableCell>
              <TableCell>{row.picoaccion}</TableCell>
              <TableCell>{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
