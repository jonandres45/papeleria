import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(producto, precio, millar){
    return {producto, precio, millar};
}

const rows = [
    createData("MILLAR DE TESTIMONIO", "$1.50", "$1,500"),
    createData("CARÁTULA DE PAPEL (Económico)", "$10", ""),
    createData("PROTOCOLO ABIERTO CON 300 FOLIOS", "$690", ""),
    createData("PROTOCOLO CERRADO (Blanco y rayado)", "$650", ""),
    createData("CARPETAS DE APÉNDICE (varios tamaños 5,6,10)", "$250", ""),
    createData("CARÁTULAS DE PLASTICO TRANSPARENTE", "$17", ""),
    createData("LIBROS DE REGISTRO", "$320", ""),
    createData("CARPETAS PARA FIRMAS CON IMPRESIÓN", "$630", ""),
    createData("HOJAS MEMBRETADAS", "$2.50", "$2,500"),
    createData("SELLOS AUTOMATICOS", "$630", ""),
    createData("TINTAS PARA SELLO", "$130", "")
];

function TableArticles(){
    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PRODUCTO</TableCell>
              <TableCell align="center">PRECIO UNITARIO</TableCell>
              <TableCell align="center">PRECIO POR MILLAR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.producto}
                </TableCell>
                <TableCell align="center">{row.precio}</TableCell>
                <TableCell align="center">{row.precio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
    );   
}

export {TableArticles};