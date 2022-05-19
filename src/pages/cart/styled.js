import styled from "styled-components"
import {Box, Button} from '@mui/material'

export const CartContainer = styled.div`
  height: 100vh;
`
export const Title = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    letter-spacing: -0.39px;
    height: 44px;
`
export const AddressContainer = styled.div`
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
    gap:8px;
    padding: 16px;
`
export const AddressLabel = styled.span`
    width: 100%;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`
export const Address = styled.span`
    width: 100%;
    height: 18px;
    font-size: 16px;
    letter-spacing: -0.39px;
`
export const EmptyCart = styled.div`
    width: 100%;
    opacity: 0.89;
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    padding:12px;
    margin-bottom: 45px;
    margin-top: 8px;
`
export const InfoContainer = styled.div`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const RightText = styled.p`
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: right;
`
export const SubTotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
`
export const SubTotal = styled.p`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.43px;
    color: #5cb646;
`
export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 0;
`
export const PaymentTitle = styled.p`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 8px 0;
    border-bottom: 1px solid;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    margin-bottom: 11px;
`

export const CardsContainer = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap:8px;
    overflow-y: scroll;
    height: 50vh;
    margin-bottom: 16px;
`

export const BoxLabel = styled(Box)({
    fontSize: '16px',
    letterSpacing: '-0.39px',    
});
export const ButtonCart = styled(Button)({
    width: '100%',
    fontSize: '16px',
    letterSpacing: '-0.39px',
    padding: '12px',
});

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 16px;
`