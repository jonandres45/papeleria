import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BalanceIcon from '@mui/icons-material/Balance';
import GppGoodIcon from '@mui/icons-material/GppGood';
import './Skills.css';

function Skills(){
    return (
        <div className='hero'>
            <div className='promo'>
                <Box sx={{mb:18, mt:18}}>
                    <Grid container spacing={2} justifyContent='space-evenly' alignItems="center" sx={{ mt: 4 }}>
                        <Grid item xs={12} md={1} textAlign="center">
                            <BalanceIcon className='iconStyle' sx={{ fontSize: 60 }}/>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <h2 className='arizonia'>Papelería Jireh</h2>
                            <p className='arizonia'>Somos Fabricantes en artículos personalizados para su notaría.</p>
                        </Grid>
                        <Grid item xs={12} md={1} textAlign="center">
                            <GppGoodIcon className='iconStyle' sx={{ fontSize: 60 }}/>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <h2 className='arizonia'>Seguridad</h2>
                            <p className='arizonia'> Le brindamos seguridad y calidad en sus insumos.</p>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <video muted autoPlay loop>
                <source src='static/video/video3.mp4' type='video/mp4'/>
            </video>
            <div className='capa'></div>
        </div>
        
    );
}

export {Skills};