import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Swipper} from '../Swipper';
import { SwiperSlide } from "swiper/react";
import ScrollAnimation from 'react-animate-on-scroll';
import './Catalogo.css';

function Catalogo(props){

    return (        
        <Box sx={{position:'relative'}}>
            <svg sx={{display:{xs:'none', md:'block'} }} className='waves-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B5822C" fillOpacity="0.7" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,90.7C672,107,768,181,864,186.7C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>            
              <Grid 
                container 
                spacing={2} 
                justifyContent='center' 
                direction={props.reverse} 
                sx={{ mb: 10 }}
                alignItems="center"
              >                   
                {(props.images.length < 2) ? (                  
                  <Grid item xs={11} md={4} sx={{ mt: 4 }} textAlign="center">
                      <ScrollAnimation 
                        animateIn='bounceInUp'
                        animateOut='bounceOutLeft'
                      >
                        <img 
                          src={"static/images/" + props.images[0]}
                          className="images"
                          alt={props.images[0]}
                        />
                        <h1 className='textoMobil'>{props.nombre}</h1>
                        <p className='textoMobil'>{props.description}</p>
                      </ScrollAnimation>
                  </Grid>
                ) : (
                  <Grid item xs={9} md={4} sx={{ mt: 4 }} textAlign="center">
                    <ScrollAnimation 
                        animateIn='bounceInUp'
                        animateOut='bounceOutLeft'
                      >
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
                        <h1 className='textoMobil'>{props.nombre}</h1>
                        <p className='textoMobil'>{props.description}</p>
                    </ScrollAnimation>
                  </Grid>
                )}       
                         
                  <Grid item xs={12} md={4} sx={{ mt: 4, textAlign:'center', display:{xs:'none', md:'block'} }}>
                    <ScrollAnimation 
                      animateIn='fadeIn'
                      animateOut='fadeOut'
                    >
                          <p className='TextName'>{props.nombre}</p>
                          <p>{props.description}</p>
                    </ScrollAnimation>
                  </Grid>
              </Grid>
        </Box>
    );
}

export {Catalogo};