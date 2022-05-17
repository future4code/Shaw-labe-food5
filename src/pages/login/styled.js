import styled from "styled-components";
import { TextFields } from "@mui/icons-material"; 
import { Button, InputAdornment, TextField } from '@mui/material';


export const LoginPageMainDiv = styled.div`
display: grid; 
grid-template-rows: 146px 1fr; 
font-family: 'Roboto', sans-serif; 
font-weight: 500; 
font-size: 16px; 
letter-spacing: -0.39px;
color: black; 

`

export const LoginPageLogoDiv = styled.div`
display: flex; 
flex-direction: column; 

align-items: center; 
justify-content: flex-end; 

img{
    max-width: 104px; 
    max-height: 58px; 
}

`

export const LoginPageContentDiv = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 

margin-top: 28px; 

p{
    margin-top: 28px; 
}

`

export const LoginPageFormDiv = styled.div`
display: flex; 
flex-direction: column; 
width: 90%; 

#passwordInput{
    margin-top: 16px; 
}

Button{
    color: #5cb646;

}

.MuiSvgIcon-root {
    color: #b8b8b8;
}


    .MuiButtonBase-root {
    color: #000000;
}

`


export const GreyBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color:  #b8b8b8 ;
    border: 1px;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #b8b8b8 ;
    }
  }

  & .MuiIconButton-root{
      color: 'black'
  }
`;
