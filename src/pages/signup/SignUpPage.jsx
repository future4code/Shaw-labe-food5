import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { SignUpPageContentDiv, SignUpPageFormDiv, SignUpPageLogoDiv, SignUpPageMainDiv,GreyBorderTextField } from './styled';
import logo from '../../assets/logo.png';
import * as Yup from 'yup'; 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, InputAdornment, Alert, Snackbar  } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import IconButton from '@mui/material/IconButton';
import axios from "axios"; 
import { BaseUrl } from '../../constants/api';
import loading from '../../assets/myLoading.svg';
import {GlobalContext} from '../../global/GlobalContext'
import { LoadingDiv } from '../CreateAddress/styled';




//token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFaZWJJS21NR3Z3VDROT1NIcWVmIiwibmFtZSI6InRlc3RlIHRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0YW5kby5jb20iLCJjcGYiOiI1NTUuNTU1LjU1NS0wMCIsImhhc0FkZHJlc3MiOmZhbHNlLCJpYXQiOjE2NTI4MTQ0Nzl9.94KvZFamtttWtfFVe8S4wW23jX5l0VYy-nqR2jGSmpQ

//martin token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InIxNUVVT3JjWFk2dTZiM0M0UDRQIiwibmFtZSI6Ik1hcnRpbiBTZWphcyIsImVtYWlsIjoibWFydGluQGxhYmVudS5jb20iLCJjcGYiOiIxNzMuMDAwLjAwMC0wMCIsImhhc0FkZHJlc3MiOmZhbHNlLCJpYXQiOjE2NTI4MzkwMzN9.tcyebwQVcsIrgQs0J55eMmKZ2muotWbuPyTeBX5arxI"


const SignUpPage = () => {
    const navigate = useNavigate(); 
    const [showPassword, setShowPassword] = useState(false); 
    const [showCheckPassword, setShowCheckPassword] = useState(false); 
    const {states, setters} = useContext(GlobalContext); 
    const {setUser} = setters; 

    //alert
    const [open, setOpen] = useState(false)
    const [messageError, setMessageError] = useState('')
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    //-------------------------------------------------------

    useEffect( ()=>{
        const token = window.sessionStorage.getItem('token')
        
        if(token) {
            navigate('/', {replace: true})
        }


    },[])

    const attemptSignUp = async (url, body, setOpen) => {
        try 
        {
            const response = await axios.post(`${BaseUrl}${url}`,body)
            return response; 
        }
        catch (error) {
            setOpen(true)
            setMessageError(error.response.data.message)
        }
    }

    return (
        <SignUpPageMainDiv>
            <Header/>

            <SignUpPageLogoDiv>
            <img alt='FutureEats Logo' src={logo}/> 
            </SignUpPageLogoDiv>

            <SignUpPageContentDiv>
                <h3>Cadastrar</h3>

            <SignUpPageFormDiv>

                <Formik
                initialValues={{name: "", email:"", cpf: "", password: "", checkPassword: ""}}

                validationSchema = {Yup.object({
                    name: Yup
                    .string('Insira o seu nome completo')
                    .min(3, "Mínimo 3 caracteres")
                    .max(40, "Máximo 40 caracteres")
                    .required('Campo obrigátorio'), 
                    email: Yup
                    .string('Insira o seu email')
                    .email('Entre um email válido')
                    .required('Campo obrigátorio'), 
                    cpf: Yup
                    .string('Insira o seu cpf')
                    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Formato: 000.000.000-00")
                    .required('Campo obrigátorio'), 
                    password: Yup
                    .string('Insira a sua senha')
                    .min(6, 'Mínimo 6 caracteres')
                    .max(25, 'Máximo 25 caracteres')
                    .required('Campo obrigátorio'),
                    checkPassword: Yup
                    .string()
                    .required('Campo obrigátorio')
                    .oneOf([Yup.ref('password')], 'Senhas não são iguais')
                })}

                onSubmit = { (values, actions) => {
                    //codigo de submeter 
                    let body = {
                        name: values.name,
                        email: values.email, 
                        cpf: values.cpf,
                        password: values.password
                    }

                    let answer = attemptSignUp("signup",body, setOpen); 
                    answer.then( (response) => {
                       if(response.data.token) 
                       { 
                           window.sessionStorage.setItem("token", response.data.token)
                        navigate('./address', {replace: true}); 
                       }

                       else {

                       }
                        actions.setSubmitting(false)
                        actions.resetForm()
                    }

                    ).catch( (error) => {
                        console.log("erro dentro do signup form", error);
                        actions.setSubmitting(false)
                        actions.resetForm()
                    })
                    

                    
                }}
                >
                    { (props) => {
                        return(
                            <Form>
                                 <Field name ="name">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
                                       label = "Nome*"
                                       variant = 'outlined'
                                       placeholder='Nome e sobrenome'
                                       type='text'
                                       focused
                                       value={form.values.name}
                                       onChange={form.handleChange}
                                       error={form.touched.name && Boolean(form.errors.name)}
                                       helperText={form.touched.name && form.errors.name}
                                       />
                                   )}
                               </Field>

                                 <Field name ="email">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
                                       sx={{
                                        marginTop: '16px',
                                    }}
                                       label = "E-mail*"
                                       variant = 'outlined'
                                       placeholder='email@email.com'
                                       type='email'
                                       focused
                                       value={form.values.email}
                                       onChange={form.handleChange}
                                       error={form.touched.email && Boolean(form.errors.email)}
                                       helperText={form.touched.email && form.errors.email}
                                       />
                                   )}
                               </Field>

                               <Field name ="cpf">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
                                       sx={{
                                        marginTop: '16px',
                                             }}
                                       label = "CPF*"
                                       variant = 'outlined'
                                       placeholder='000.000.000-00'
                                       type='text'
                                       focused
                                       value={form.values.cpf}
                                       onChange={form.handleChange}
                                       error={form.touched.cpf && Boolean(form.errors.cpf)}
                                       helperText={form.touched.cpf && form.errors.cpf}
                                       />
                                   )}
                               </Field>

                               <Field name ="password">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
                                     
                                       sx={{
                                           marginTop: '16px',
                                       }}
                                       label = "Senha*"
                                       variant = 'outlined'
                                       placeholder='Mínimo 6 caracteres '
                                       focused
                                       type={showPassword ? 'text':'password'}
                                       value={form.values.password}
                                       onChange={form.handleChange}
                                       error={form.touched.password && Boolean(form.errors.password)}
                                       helperText={form.touched.password && form.errors.password}
                                       InputProps={ {  endAdornment: 
                                        <InputAdornment position = "end" >
                                            <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={()=> setShowPassword(!showPassword)}
                                            edge = 'end'
                                            
                                            >
                                                {showPassword ? <VisibilityOff/>: <Visibility />}
                                            </IconButton>

                                        </InputAdornment>,
                                       }}
                                       />
                                   )}
                               </Field>

                               <Field name ="checkPassword">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
                                     
                                       sx={{
                                           marginTop: '16px',
                                       }}
                                       label = "Confirmar*"
                                       variant = 'outlined'
                                       placeholder='Confirme a senha anterior'
                                       focused
                                       type={showCheckPassword ? 'text':'password'}
                                       value={form.values.checkPassword}
                                       onChange={form.handleChange}
                                       error={form.touched.checkPassword && Boolean(form.errors.checkPassword)}
                                       helperText={form.touched.checkPassword && form.errors.checkPassword}
                                       InputProps={ {  endAdornment: 
                                        <InputAdornment position = "end" >
                                            <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={()=> setShowCheckPassword(!showCheckPassword)}
                                            edge = 'end'
                                            
                                            >
                                                {showCheckPassword ? <VisibilityOff/>: <Visibility />}
                                            </IconButton>

                                        </InputAdornment>,
                                       }}
                                       />
                                   )}
                               </Field>

                               { props.isSubmitting ? <LoadingDiv>
                                   <img alt='loading' src={loading}/>
                               </LoadingDiv>:
                               <Button 
                               variant='contained'
                                fullWidth
                                disableElevation
                                type='submit'
                                sx={{
                                    marginTop: '16px',
                                    textTransform:"none",
                                    borderRadius: '0px',
                                   
                                }}
                                >Criar</Button>}
                             
                            </Form>
                        )
                    }}

                </Formik>


            </SignUpPageFormDiv>

            </SignUpPageContentDiv>

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                key={'top' + 'center'}
            >
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    {messageError}
                </Alert>
            </Snackbar> 

        </SignUpPageMainDiv>
    )
}

export default SignUpPage