import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './TableArticles.css';

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
      <Box sx={{ flexGrow: 1, pb:15, pt:5 }} className="backgroundLocation">
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} textAlign="center">
                  <h1>Productos y precios</h1>
                </Grid>
                <Grid item xs={12} md={7}>
                  <TableContainer component={Paper} className="tableStyle">
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                      <TableHead style={{background: '#C1A66C'}}>
                        <TableRow>
                          <TableCell style={{color:'white'}}>PRODUCTO</TableCell>
                          <TableCell align="center" style={{color:'white'}}>PRECIO UNITARIO</TableCell>
                          <TableCell align="center" style={{color:'white'}}>PRECIO POR MILLAR</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.producto}
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
                </Grid>
            </Grid>
      </Box>
    );   
}

export {TableArticles};