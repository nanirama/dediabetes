import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


function createData(sintoma1, sintoma2) {
  return { sintoma1, sintoma2 };
}

const rows = [
  createData("Aumento de la frecuencia cardíaca (taquicardia)", "Fatiga"),
  createData("Temblores","Sensación de mareo"),
  createData("Ansiedad","Dolor de cabeza"),
  createData("Sudoración","Cambios en la conducta (ej. irritabilidad)"),
  createData("Palidez",""),
  createData("Sensación de hambre",""),
];

export const HipoSintomas = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" className="bg-gray-200 font-bold">Síntomas Autonómicos</TableCell>
            <TableCell align="center" className="font-bold">Síntomas Neuroglucopénicos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell className="bg-gray-200">
                {row.sintoma1}
              </TableCell>
              <TableCell>{row.sintoma2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
