import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {handleClick} from './Helpers.js';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

function Menu(){    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Button 
                        color="inherit"
                        onClick={(event)=> handleClick(event, '#catalogo')}
                    >
                        <MenuBookIcon sx={{mr: 1}}/> Catalogo
                    </Button>
                    <Button 
                        color="inherit"
                        onClick={(event)=> handleClick(event, '#contact')}
                    >
                        <ContactMailIcon sx={{mr: 1}}/> Contacto
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export {Menu};