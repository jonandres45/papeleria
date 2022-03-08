import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Swipper} from '../Swipper';
import { SwiperSlide } from "swiper/react";
import './Catalogo.css';
function Catalogo(props){
    return (
        <Box sx={{position:'relative'}}>
            <svg className='waves-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,64L80,64C160,64,320,64,480,90.7C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>          
            <Grid 
              container 
              spacing={2} 
              justifyContent='center' 
              direction={props.reverse} 
              sx={{ mb: 10 }}
              alignItems="center"
            >
              {(props.images.length < 2) ? (
                <Grid item xs={12} md={4} sx={{ mt: 4 }}>
                  <img 
                    src={"static/images/" + props.images[0]}
                    className="images"
                    alt={props.images[0]}
                  />
                </Grid>
              ) : (
                <Grid item xs={12} md={4} sx={{ mt: 4 }}>
                  <Swipper clase='swipperCatalogo'>
                        {props.images.map(item => (
                          <SwiperSlide key={item}>
                            <img 
                              src={"static/images/" + item}
                              className="images"
                              alt={item}
                            />
                          </SwiperSlide>                          
                        ))}
                    </Swipper>
                </Grid>
              )}
                <Grid item xs={12} md={4} sx={{ mt: 4, textAlign:'center' }}>
                    <h1>{props.nombre}</h1>
                    <p>{props.description}</p>                    
                </Grid>
            </Grid>
        </Box>
    );
}

export {Catalogo};