import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Animation} from '../Animation';
import './Inicio.css';
function Inicio(){
    return(
        <Box sx={{ flexGrow: 1 }} className="backgroundInicio">
            <Grid
                container 
                style={{height: '100%'}}
                direction="row"
                justifyContent="center"
                alignItems="center"
                textAlign='center'
            >
                <Grid item md={5}>
                    <Animation/>
                </Grid>
                <Grid item xs={11} md={5}>
                    <img
                        src="static/logo/logonuevo.png"
                        alt="Papeleria notarial jireh"
                        className="logoInicio"
                    >
                    </img>
                </Grid>
            </Grid>
        </Box>
    );
}

export {Inicio};