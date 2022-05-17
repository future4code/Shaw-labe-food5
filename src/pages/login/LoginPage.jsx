import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { goToHome, goToSignUp } from '../../routes/cordinator';
import * as Yup from 'yup'; 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { GreyBorderTextField, LoginPageContentDiv, LoginPageFormDiv, LoginPageLogoDiv, LoginPageMainDiv } from './styled';
import { Button, InputAdornment, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import IconButton from '@mui/material/IconButton';


const LoginPage = () => {
    const navigate = useNavigate(); 
    const [showPassword, setShowPassword] = useState(false); 

    useEffect( ()=>{
        if(window.localStorage.length > 0)
        {
            goToHome(navigate); 
        }

    },[])


    

    return (
        <LoginPageMainDiv>

            <LoginPageLogoDiv>
                <img alt='FutureEats Logo' src={logo}/> 
            </LoginPageLogoDiv>

            <LoginPageContentDiv>
                <p>Entrar</p>


                <LoginPageFormDiv>

                <Formik
                initialValues={{email: "", password: ""}}

                validationSchema = {Yup.object({
                    email: Yup
                    .string('Insira o seu email')
                    .email('Entre um email válido')
                    .required('Campo obrigátorio'), 
                    password: Yup
                    .string('Insira a sua senha')
                    .min(6, 'Mínimo 6 caracteres')
                    .max(25, 'Máximo 25 caaracteres')
                    .required('Campo obrigátorio')
                })}

                onSubmit = { (values, actions) => {
                    //codigo de submeter importante
                    let body = {
                        email: values.email, 
                        password: values.password
                    }

                    alert(body); 
                }}

                >
                    { (props) => {
                        return (
                            <Form>
                               <Field name ="email">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
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

                               <Field name ="password">
                                   {({field, form}) => (
                                       <GreyBorderTextField
                                       {...field}
                                       fullWidth
                                     
                                       sx={{
                                           marginTop: '16px',
                                           colorScheme: '#b8b8b8 ',
                                           fontFamily: "'Roboto', sans-serif",
                                          
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
                                                {showPassword ? <VisibilityOff color='#000000'/>: <Visibility color='#000000'/>}
                                            </IconButton>

                                        </InputAdornment>,
                                       }}
                                       />
                                   )}
                               </Field>
                               <Button 
                               variant='contained'
                                fullWidth
                                disableElevation
                                
                                sx={{
                                    marginTop: '16px',
                                    colorScheme: '#b8b8b8 ',
                                    borderRadius: '0px',
                                    backgroundColor: '#5cb646',
                                    fontFamily: "'Roboto', sans-serif",
                                    textTransform: "none",
                                    textDecorationColor: '#000000',
                                    color: '#000000'
                                }}
                                >Entrar</Button>
                            </Form>
                        )
                    }}
                    
                </Formik>
       
                </LoginPageFormDiv>


            


            <p id='signUpButton' onClick={()=> goToSignUp(navigate)}>Não possui cadastro? Clique aqui.</p>
            </LoginPageContentDiv>
           
        </LoginPageMainDiv>
    )
}

export default LoginPage