import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../../routes/cordinator";

const ErrorPage = () => {
    const navigate = useNavigate(); 

    useEffect( ()=> {
        goToHome(navigate); 
    })

    return(
        <>
            ErrorPage
        </>
    )
}

export default ErrorPage