import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Location.css';

function Location(){
    return (
        <Box sx={{ flexGrow: 1, pb:18 }} className="backgroundLocation">
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={11} md={8}>
                    <a href='https://wa.me/5772031860'>
                        <Stack direction="row" spacing={2}>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/social/whats.png"
                                sx={{ width: 34, height: 34, mr:1 }}
                            />57-72-03-18-60
                        </Stack>
                    </a>
                    <p>
                        Tel: 55 72 03 18 60
                    </p>                                                
                    <p>
                        <a href='mailto:notarial@papeleriajireh.com'>notarial@papeleriajireh.com</a>
                    </p>
                </Grid>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={11} md={4}>
                    <p>
                        Av Leona Vicario MZA 13 LTE 49, SM 217, 217
                    </p>
                    <p>
                        77518 Cancún, Q.R.
                    </p>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.675996581247!2d-86.87632928506507!3d21.165288685924594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d60759cddb290b6!2zMjHCsDA5JzU1LjAiTiA4NsKwNTInMjYuOSJX!5e0!3m2!1ses!2smx!4v1649837160403!5m2!1ses!2smx" 
                        width="99%" 
                        height="350"
                        allowFullScreen="" 
                        loading="lazy"
                        title="location1"
                    >
                    </iframe>
                </Grid>
                <Grid item xs={11} md={4}>
                    <p>
                        Presidente Miguel Alemán #136 mz-29 lt-21
                    </p>
                    <p>
                        Col: El chamizal, Estado de México  C.P: 55720
                    </p>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1880.4831667296244!2d-99.05676879921704!3d19.500084200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1faf63b41bc93%3A0xd5b4618a22c42e0!2sPdte.%20Miguel%20Alem%C3%A1n%20Valdez%2C%20El%20Chamizal%2C%2055270%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1649837046463!5m2!1ses!2smx" 
                        width="99%" 
                        height="350"
                        allowFullScreen="" 
                        loading="lazy"
                        title="location1"
                    >
                    </iframe>
                </Grid>
                <Grid item xs={6} textAlign="center">
                    <img
                        src="static/logo/logonuevo.png"
                        className='logo_footer'
                        alt="logo"
                    />
                </Grid>
            </Grid>
        </Box>            
    );
}

export {Location};