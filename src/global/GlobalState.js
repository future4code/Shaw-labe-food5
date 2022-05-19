import { GlobalContext } from './GlobalContext'
import React, {useEffect, useState} from 'react'

export default function GlobalState(props) {

    //objeto user
    const [user, setUser] = useState({});

    // produtos no carrinho
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const cartLocal = window.localStorage.getItem('cart')
        cartLocal && setCart(JSON.parse(cartLocal))
    },[])
    


    let states = {user, cart}; 
    let setters = {setUser, setCart}

    return (
        <GlobalContext.Provider value = { {states,setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


