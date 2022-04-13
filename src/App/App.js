import React from 'react';
import './App.css';
import {Menu} from '../Menu';
import {Inicio} from '../Inicio';
import {Title} from '../Title';
import {Catalogo} from '../Catalogo';
import {Skills} from '../Skills';
import {Location} from '../Location';
import {Contact} from '../Contact';
import {TableArticles} from '../TableArticles';
import { Whatsapp } from '../Whatsapp';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary:{
        main:"#231F20",
        contrastText: "#FFFFFF"
      },
    },
  });
  const catalogo = [
    {
      nombre:'Carátulas de papel',
      description:'',
      reverse: "",
      images:['caratulaPapel/image1.jpg', 'caratulaPapel/image2.jpg', 'caratulaPapel/image4.jpg']
    },
    {
      nombre:'Carátula de plástico con papel',
      description:'',
      reverse: 'row-reverse',
      images:['caratulaPlasticoPapel/image1.jpg']
    },
    {
      nombre:'Libro índice personalizado en diferentes colores',
      description:'',
      reverse: "",
      images:['libroIndicePerzonalizado/image2.jpg','libroIndicePerzonalizado/image1.jpg', 'libroIndice/image1.jpg', 'libroIndice/image2.jpg']
    },
    {
      nombre:'Libro guía personalizado en diferentes colores incluye diseño',
      description:'',
      reverse: "row-reverse",
      images:['libroGuia/image1.jpg', 'libroGuia/image2.jpg']
    },
    {
      nombre:'Carátulas de plástico en color y transparente en diferentes tamaños y colores.',
      description:'',
      reverse: '',
      images:['caratulaPlasticoColor/image1.jpg','caratulaPlasticoColor/image2.jpg']
    },
    {
      nombre:'Hoja testimonio con alta seguridad.',
      description:'',
      reverse: "row-reverse",
      images:['hojaTestimonio/image1.jpg', 'hojaTestimonio/image2.jpg', 'hojaTestimonio/image3.jpg']
    },
    {
      nombre:'Carpeta de apéndice diferentes colores y tamaños.  #10.5cm,7.5cm, 5.5cm y 3cm',
      description:'',
      reverse: '',
      images:['carpetaApendice/image1.jpg','carpetaApendice/image2.jpg']
    },
    {
      nombre:'Carpetas para firmas personalizadas.',
      description:'Le brindamos diseños a su gusto.',
      reverse: "row-reverse",
      images:[
        'carpetasFirmasPerzonalizadas/image1.jpg',
        'carpetasFirmasPerzonalizadas/image2.jpg',
        'carpetasFirmasPerzonalizadas/image3.jpg',
        'carpetasFirmasPerzonalizadas/image4.jpg',
        'carpetasFirmasPerzonalizadas/image5.jpg',
        'carpetasFirmasPerzonalizadas/image6.jpg',]
    },
    {
      nombre:'Protocolo abierto personalizados  con folio 1 al 300.',
      description:'',
      reverse: "",
      images:['protocoloAbierto/image1.jpg','protocoloAbierto/image2.jpg',]
    },
    {
      nombre:'Tintas para almohadilla y sellos',
      description:'',
      reverse: "row-reverse",
      images:['tintas/image1.jpg','tintas/image2.jpg','tintas/image3.jpg',]
    },
    {
      nombre:'Bolígrafos metálicos y de plástico, personalizados  impresión en serigrafia, láser  o grabado.',
      description:'',
      reverse: "",
      images:['pluma/image1.jpg','pluma/image2.jpg']
    },
    {
      nombre:'Hologramas personalizados para su mayor seguridad en sus hojas testimonio.',
      description:'',
      reverse: "row-reverse",
      images:['hologramas/image1.jpg','hologramas/image2.jpg',]
    },
    {
      nombre:'Sellos automáticos y  personalizados.',
      description:'',
      reverse: "",
      images:['sellos/image1.jpg']
    },
  ];

  return (
      <ThemeProvider theme={theme}>
        <Menu/>
        <Inicio/>
        <Title/>
        {catalogo.map((item) =>(
            <Catalogo
              key={item.nombre}
              nombre ={item.nombre}
              description= {item.description}
              reverse={item.reverse}
              images={item.images}
            />       
        ))}
        <TableArticles/>
        <Skills/>
        <Contact/>
        <Location/>
        <Whatsapp/>
      </ThemeProvider>
  );
}

export default App;
