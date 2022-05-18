
import { Button } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import { CardButton, CardContainer, CardImage, CardInfo, Description, Price, Product, Quantity } from "./styled"


const CardProduct = ({product}) => {
    const [checkCart, setCheckCart] = useState([])
    const [quantity, setQuantity] = useState(2)
    const { states, setters } = useContext(GlobalContext)
    const {cart} = states;
    const {setCart} = setters;
    useEffect(()=>{
        const check = cart.filter((item)=>item.id===product.id)
        setCheckCart(check)
    },[cart])

    const removeItem = (id) => {
        const cartCopy = [...cart]
        const index = cartCopy.findIndex((item)=>{
            return item.id===id
        })
        cartCopy.splice(index,1)
        setCart(cartCopy)
    }
    const addItem = (item) => {
        const cartCopy = [...cart, item]
        setCart(cartCopy)
    }
    return(
        <CardContainer>
            <CardImage src={product.photoUrl} alt={product.name}/>
            <CardInfo>
                <Product>{product.name}</Product>
                <Description>{product.description}</Description>
                <Price>R${product.price},00</Price>
            </CardInfo>
            <CardButton checkCart ={checkCart}>
                {product.quantity ? <Quantity>{product.quantity}</Quantity>:<div></div>}
                {checkCart.length > 0 ?
                <Button onClick={()=>removeItem(product.id)}>remover</Button>
                :
                <Button onClick={()=>addItem(product)}>adicionar</Button>
                }
            </CardButton>
        </CardContainer>
    )
}

export default CardProduct