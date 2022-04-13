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
                        Tel: 5572031860
                    </p>                                                
                    <p>
                        <a href='mailto:papelerianotarialjireh@outlook.com'>papelerianotarialjireh.com</a>
                    </p>
                </Grid>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={11} md={4}>
                    <p>
                        Domicilio Presidente Miguel Alemán #136 mz-29 lt-21
                    </p>
                    <p>
                        Col: El chamizal, Estado de México  C.P: 55720
                    </p>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.6935983527787!2d-99.04977912451977!3d19.597623320175657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1a211cf8bd9%3A0x29ecc811fb62988d!2sPalacio%20Municipal%20de%20Ecatepec!5e0!3m2!1ses-419!2smx!4v1646536600422!5m2!1ses-419!2smx" 
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
                        Domicilio Presidente Miguel Alemán #136 mz-29 lt-21
                    </p>
                    <p>
                        Col: El chamizal, Estado de México  C.P: 55720
                    </p>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.6935983527787!2d-99.04977912451977!3d19.597623320175657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1a211cf8bd9%3A0x29ecc811fb62988d!2sPalacio%20Municipal%20de%20Ecatepec!5e0!3m2!1ses-419!2smx!4v1646536600422!5m2!1ses-419!2smx" 
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