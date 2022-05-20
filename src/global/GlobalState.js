import { GlobalContext } from './GlobalContext'
import React, {useContext, useEffect, useState} from 'react'

export const GlobalStateProvider = (props) => {

    //objeto user
    const [user, setUser] = useState({});

    // produtos no carrinho
    const [cart, setCart] = useState([]);

    // info pedido criado

    const [order, setOrder] = useState({})

    useEffect(()=>{
        const cartLocal = window.localStorage.getItem('cart')
        cartLocal && setCart(JSON.parse(cartLocal))
    },[])
    
    let states = {user, cart, order}; 
    let setters = {setUser, setCart, setOrder}
    const [filter, setFilter] = useState("")

    return (
        <GlobalContext.Provider value = {{filter, setFilter, states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useFilter = () => useContext(GlobalContext)


