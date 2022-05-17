import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import * as Yup from 'yup'; 
import { Button, InputAdornment, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { BaseUrl } from '../../constants/api';
import loading from '../../assets/loading.gif'
import {GlobalContext} from '../../global/GlobalContext'
import { AddressPageContentDiv, AddressPageFormDiv, AddressPageMainDiv } from './styled';

function AddressPage() {

  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false); 
  const [showCheckPassword, setShowCheckPassword] = useState(false); 
  const {states, setters} = useContext(GlobalContext); 
  const {user} = states; 
  const {setUser} = setters; 
  const [formInitialState, setFormInitialState] = useState({}); 


  useEffect( ()=>{
    if(user && user.hasAddress) 
    {
      //get address from API and load it into default values
    }

    else {
      setFormInitialState({
        street: "",
        streetNumber: "",
        complement: "", 
        district: "",
        city: "", 
        state: ""
      })
    }
  },[])




  return (
    <AddressPageMainDiv>
      <Header/>

      <AddressPageContentDiv>
        <h3>Meu endereço</h3>
      </AddressPageContentDiv>

      <AddressPageFormDiv>

        <Formik
        initialValues={formInitialState ? {formInitialState}: {
          street: "",
          streetNumber: 0,
          complement: "", 
          district: "",
          city: "", 
          state: ""
        }}

        validationSchema = {Yup.object({
          street: Yup.string('Insira a sua rua')
          .min(3, "Mínimo 3 caracteres")
          .max(40, "Máximo 40 caracteres")
          .required('Campo obrigátorio'),
          streetNumber: Yup.number('Insira o numero da sua rua') 
          .min(1, 'Tem que ser maior que 1')
          .max(10000, 'Nao pode ser maior que 10000')
          .required('Campo obrigátorio'),
          complement: Yup.string('Insira o complemento')
          .max(15, 'maximo 15 caracteres'),
          district: Yup.string('Insira o seu bairro')
          .min(3, "Mínimo 3 caracteres")
          .max(25, "Máximo 25 caracteres")
          .required('Campo obrigátorio'),
          city: Yup.string('Insira o nome da sua cidade')
          .min(3, "Mínimo 3 caracteres")
          .max(30, "Máximo 30 caracteres")
          .required('Campo obrigátorio'),
          state: Yup.string('Insira o nome do seu estado')
          .min(3, "Mínimo 3 caracteres")
          .max(30, "Máximo 30 caracteres")
          .required('Campo obrigátorio'),

        })}
        >

        </Formik>



      </AddressPageFormDiv>


      </AddressPageMainDiv>
  )
}

export default AddressPage