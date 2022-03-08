import React from 'react';
import './App.css';
import {Menu} from '../Menu';
import {Inicio} from '../Inicio';
import {Catalogo} from '../Catalogo';
import {Skills} from '../Skills';
import {Location} from '../Location';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {
  const theme = createTheme({
    palette: {
      primary:{
        main:"#000000",
        contrastText: "#FFFFFF"
      },
    },
  });
  const catalogo = [
    {
      nombre:'Carátulas de papel',
      description:'',
      reverse: "row-reverse",
      images:['caratulaPapel/image1.jpg', 'caratulaPapel/image2.jpg']
    },
    {
      nombre:'Carátula de plástico con papel',
      description:'',
      reverse: '',
      images:['caratulaPlasticoPapel/image1.jpg']
    },
    {
      nombre:'Libro índice',
      description:'',
      reverse: "row-reverse",
      images:['libroIndice/image1.jpg']
    },
    {
      nombre:'Carátulas de plástico en color y transparente en diferentes tamaños y colores.',
      description:'',
      reverse: '',
      images:['caratulaPlasticoColor/image1.jpg','caratulaPlasticoColor/image2.jpg','caratulaPlasticoColor/image3.jpg']
    },
    {
      nombre:'Hoja testimonio con alta seguridad.',
      description:'',
      reverse: "row-reverse",
      images:['hojaTestimonio/image1.jpg']
    },
    {
      nombre:'Carpeta de apéndice diferentes colores y tamaños.  #10.5cm,7.5cm, 5.5cm y 3cm',
      description:'',
      reverse: '',
      images:['carpetaApendice/image1.jpg','carpetaApendice/image2.jpg']
    },
    {
      nombre:'Sellos automáticos y  personalizados.',
      description:'',
      reverse: "row-reverse",
      images:['sellos/image1.jpg']
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Menu/>
      <Inicio/>
      {catalogo.map((item) =>(
        <Catalogo
          key={item.nombre}
          nombre ={item.nombre}
          description= {item.description}
          reverse={item.reverse}
          images={item.images}
        />
      ))}
      <Skills/>
      <Location/>
    </ThemeProvider>
  );
}

export default App;
