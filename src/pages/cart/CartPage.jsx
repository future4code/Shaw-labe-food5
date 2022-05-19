import React, { useContext, useEffect, useState } from 'react'
import { Address, AddressContainer, AddressLabel, EmptyCart, Title, PaymentContainer, PaymentTitle, CartContainer, SubTotal, SubTotalContainer, RightText, InfoContainer, ButtonCart, ButtonContainer, BoxLabel, CardsContainer } from './styled'
import { FormControlLabel, Radio, RadioGroup, FormControl } from '@mui/material'
import CardProduct from '../../components/cardProduct/CardProduct'
import { GlobalContext } from '../../global/GlobalContext'

const CartPage = () => {
    const [paymentMethod, setPayment] = useState('');
    const { states } = useContext(GlobalContext)
    const {cart} = states;
    const [values, setValues] = useState(0)


    const onChange = (event) => {
        setPayment(event.target.value)
    }
    useEffect(()=>{
        let total = 0;
        cart.forEach((product)=>{
            total = total + product.price * product.quantity
            setValues(total)
        })
    },[cart])

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
                    <CardsContainer>
                        {cart.map((product)=>{

                            return <CardProduct product = {product} key={product.id} />
                        })}
                    </CardsContainer>
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
                        <SubTotal>R${values}</SubTotal>
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