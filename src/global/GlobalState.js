import { GlobalContext } from './GlobalContext'
import React, {useState} from 'react'

export default function GlobalState(props) {

    //objeto user
    const [user, setUser] = useState({});

    // produtos no carrinho
    const [cart, setCart] = useState([{
        id: "3vcYYSOEf8dKeTPd7vHe",
        name: "Pastel",
        photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
        category: "Pastel",
        description: "Pastel autêntico, feito na hora!",
        price: 3,
        quantity:5
    },
    {
        "id": "5omTFSOBYiTqeiDwhiBx",
        "description": "Esfiha deliciosa, receita secreta do Habibs.",
        "price": 1,
        "category": "Salgado",
        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
        "name": "Bibsfiha queijo"
    },
    ]);
    


    let states = {user, cart}; 
    let setters = {setUser, setCart}

    return (
        <GlobalContext.Provider value = { {states,setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


