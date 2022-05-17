import React, { useState } from 'react'
import { Address, AddressContainer, AddressLabel, EmptyCart, Title, PaymentContainer, PaymentTitle, CartContainer, SubTotal, SubTotalContainer, RightText, InfoContainer, ButtonCart, ButtonContainer, BoxLabel } from './styled'
import { FormControlLabel, Radio, RadioGroup, FormControl } from '@mui/material'

const CartPage = () => {
    const [cart, setCart] = useState([])
    const [paymentMethod, setPayment] = useState('');

    const onChange = (event) => {
        setPayment(event.target.value)
    }

    console.log(paymentMethod)
    return (
        <CartContainer>
            <Title>
                Meu carrinho
            </Title>
            <AddressContainer>
                <AddressLabel>
                    Endereço de entrega
                </AddressLabel>
                <Address>
                    Rua Alessandra Vieira, 42
                </Address>
            </AddressContainer>
            {
                cart.length > 0 ?
                    <>
                    </>
                    :
                    <EmptyCart>
                        Carrinho vazio
                    </EmptyCart>
            }

            <InfoContainer>
                <div>
                    <RightText>Frete R$0,00</RightText>

                    <SubTotalContainer>
                        <p>SUBTOTAL</p>
                        <SubTotal>R$0,00</SubTotal>
                    </SubTotalContainer>

                    <PaymentContainer>

                        <PaymentTitle>
                            Forma de pagamento
                        </PaymentTitle>

                        <FormControl>

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                onChange={onChange}
                                value={paymentMethod}
                            >
                                <FormControlLabel value={'cash'} control={<Radio />} label={<BoxLabel>Dinheiro</BoxLabel>} />

                                <FormControlLabel value={'creditCard'} control={<Radio />} label={<BoxLabel>Cartão de crédito</BoxLabel>} />
                            </RadioGroup>
                        </FormControl>
                    </PaymentContainer>
                </div>
            </InfoContainer>
            <ButtonContainer>
                <ButtonCart variant={cart.length > 0 ? 'primary' : 'secondary'} disabled={cart.length > 0 ? false : true}>
                    Confirmar
                </ButtonCart>
            </ButtonContainer>

        </CartContainer>
    )
}

export default CartPage