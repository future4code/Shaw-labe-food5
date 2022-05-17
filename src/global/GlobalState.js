import { GlobalContext } from './GlobalContext'
import React, {useState} from 'react'

export default function GlobalState(props) {

    //objeto user
    const [user, setUser] = useState({});
    


    let states = {user}; 
    let setters = {setUser}

    return (
        <GlobalContext.Provider value = { {states,setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


