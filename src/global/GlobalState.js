import { GlobalContext } from './GlobalContext'
import React from 'react'

export default function GlobalState(props) {

    return (
        <GlobalContext.Provider>
            {props.children}
        </GlobalContext.Provider>
    )
}


