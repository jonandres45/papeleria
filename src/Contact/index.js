import React from 'react';
import { ContactAnimation } from '../Animation/ContactAnimation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import {Formik, Field} from 'formik';
import './Contact.css';
import * as Yup from "yup";
import ScrollAnimation from 'react-animate-on-scroll';

function Contact(){
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const sendMessage = async (values)=>{
        setSuccess(false);
        setLoading(true);
        await axios.post("https://rangelesmusic.com/mensaje.php", JSON.stringify(values));
        setSuccess(true);
        setLoading(false);
    }
    return(
        <Box
            sx={{
                width: "100%",
                color: 'white',
                flexGrow: 1,
                textAlign:'center',                
                pb:5,
                pt:5
            }}
            className="back-contact"
            id="contact"
        >
            <Grid container justifyContent='center'>
                <Grid item lg={4}>
                    <ScrollAnimation 
                        animateIn='bounceInUp'
                        animateOut='bounceOutRight'
                    >
                        <ContactAnimation/>
                    </ScrollAnimation>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={10}>
                    <ScrollAnimation 
                        animateIn='bounceInUp'
                        animateOut='bounceOutLeft'
                    >
                        <h1 className='title-contact'>Contácto</h1>
                        <Formik
                            initialValues={{
                                nombre: "",
                                mail: "",
                                phone: "",
                                message: ""
                            }}

                            validationSchema={Yup.object().shape({
                                nombre: Yup.string().required("Dato requerido"),
                                mail: Yup.string().email("Correo incorrecto").required("Dato requerido"),
                                phone: Yup.number("Teléfono incorrecto").min(8,"Teléfono incorrecto").required("Dato requerido"),
                                message: Yup.string().required('Dato requerido')
                            })}

                            onSubmit={(values, {setSubmitting})=>{
                                setSubmitting(false);
                                sendMessage(values);
                            }}
                        >
                            {(props)=>{
                                const {
                                    errors,
                                    touched,
                                    handleSubmit,
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <label>Nombre</label>
                                        <Field
                                            type="text" 
                                            className='input-form-contact' 
                                            name="nombre"
                                        ></Field>
                                        {errors.nombre && touched.nombre ? (
                                            <Alert severity="warning">{errors.nombre}</Alert>
                                        ) : null}                                    
                                        <label>Correo eléctronico</label>
                                        <Field
                                            type="email" 
                                            className='input-form-contact' 
                                            name="mail"
                                        ></Field>
                                        {errors.mail && touched.mail ? (
                                            <Alert severity="warning">{errors.mail}</Alert>
                                        ) : null}
                                        
                                        <label>Teléfono</label>
                                        <Field
                                            type="text"
                                            className='input-form-contact'
                                            name="phone"
                                        ></Field>
                                        {errors.phone && touched.phone ? (
                                            <Alert severity="warning">{errors.phone}</Alert>
                                        ): null}
                                        <label>Mensaje</label>
                                        <Field 
                                            className='input-form-contact' 
                                            name="message"
                                            as="textarea"
                                        ></Field>
                                        {errors.message && touched.message ? (
                                            <Alert severity="warning">{errors.message}</Alert>
                                        ): null}
                                        {loading &&(
                                            <LinearProgress />
                                        )}
                                        {success ?(
                                            <Alert severity="success">Message received successfully !</Alert>
                                        ): (
                                            <button type="submit" className='btn-send-message'>Enviar Mensaje</button>
                                        )}
                                    </form>
                                );
                            }}
                        </Formik>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </Box>
    );
}

export {Contact};