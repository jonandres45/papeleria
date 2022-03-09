import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import './Skills.css';

function Skills(){
    return (
        <div className='hero'>
            <div className='promo'>
                <Box sx={{mb:10}}>
                    <Grid container spacing={2} justifyContent='center' alignItems="center" sx={{ mt: 4 }}>
                        <Grid item xs={12} md={1} textAlign="center">
                            <MilitaryTechIcon className='iconStyle' sx={{ fontSize: 60 }}/>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <h2 className='titleSkill'>Calidad</h2>
                            <p className='infoSkill'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</p>
                        </Grid>
                        <Grid item xs={12} md={1} textAlign="center">
                            <MilitaryTechIcon className='iconStyle' sx={{ fontSize: 60 }}/>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <h2 className='titleSkill'>Calidad</h2>
                            <p className='infoSkill'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} justifyContent='center' alignItems="center" sx={{ mt: 4 }}>
                        <Grid item xs={12} md={1} textAlign="center">
                            <MilitaryTechIcon className='iconStyle' sx={{ fontSize: 60 }}/>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <h2 className='titleSkill'>Calidad</h2>
                            <p className='infoSkill'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</p>
                        </Grid>
                        <Grid item xs={12} md={1} textAlign="center">
                            <MilitaryTechIcon className='iconStyle' sx={{ fontSize: 60 }}/>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <h2 className='titleSkill'>Calidad</h2>
                            <p className='infoSkill'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</p>
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