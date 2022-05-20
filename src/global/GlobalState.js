import React, {useContext, useState} from 'react'

export const GlobalContext = React.createContext();

export const GlobalStateProvider = (props) => {

    //objeto user
    const [filter, setFilter] = useState("")
    


    // let states = {user}; 
    // let setters = {setUser}

    return (
        <GlobalContext.Provider value = {{filter, setFilter}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useFilter = () => useContext(GlobalContext)


