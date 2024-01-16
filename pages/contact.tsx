import LinkedIn from '@mui/icons-material/LinkedIn';
import { Button, Container, Grid, InputLabel, Paper, TextareaAutosize, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import { useState } from 'react';

interface form {
    name: string,
    email: string,
    subject: string,
    message: string
}
interface error {
    name: boolean,
    email: boolean,
    message: boolean
}

const Contact: NextPage = () => {

    const [form, setForm] = useState<form>({name: '',email:'',subject:'',message:''});
    const [errors,setErrors] = useState<error>({name:false,email:false,message:false});

    const errorCheck = (): boolean =>{
        if(form.name === '' || form.email === '' || form.message === ''){
            let newErrors = Object.assign({},errors);
            newErrors.name = form.name === '';
            newErrors.email = form.email === '';
            newErrors.message = form.message === '';
            setErrors(newErrors);
            return true;
        }
        return false;
    }

    const SendBtnHandler = (): void =>{
        if(!errorCheck()){
            var form_data = new FormData();
            Object.keys(form).forEach((key) => form_data.append(key, form[key as keyof form]));
        
            setForm({name: '',email:'',subject:'',message:''});
            setErrors({name:false,email:false,message:false});
            fetch('https://script.google.com/macros/s/AKfycbzg0BJj8HkZ06LLkutVhFonzf5FxaWzK0xRsh8v-DpQNAaTXbai1V-W1LS_zT_byWJafA/exec', {
                method: "POST",
                mode: "no-cors",
                redirect: "follow",
                body: form_data
            }); 
        }
    }
    return (
    <Container maxWidth={false}>
        <Head>
            <title>Roel Tijerina | Contact</title>
        </Head>
        <Grid container justifyContent={"center"} className="grid-row">
            <Grid item xs={12} md={12} lg={12} textAlign={"center"}>
                <Typography variant="h2">
                    Want to reach me?
                </Typography>
                <Typography variant="h6">
                    Send me a message through LinkedIn and I will get back to you as soon as I can!
                </Typography>
            </Grid>
        </Grid>
        <Grid container justifyContent={"center"} className="grid-row-2">
            <Grid item xs={4} md={2} lg={2} textAlign={"center"}>
                <Button variant="contained" startIcon={<LinkedIn/>}>
                    LinkedIn
                </Button>
            </Grid>
        </Grid>
    </Container>);
}
 
export default Contact;
