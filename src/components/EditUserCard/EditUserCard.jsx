import React, { useState, useEffect } from 'react'
import { EditUserCardMainDiv, EditUserNameDiv, EditUserEmailDiv, EditUserCpfDiv } from './styled'
import editIcon from '../../assets/edit_icon.svg'

const EditUserCard = (props) => {
  //props.user = userinfo
console.log(props.user)
  return (
      
        <EditUserCardMainDiv>
            <EditUserNameDiv>
            <p>{props.user.name}</p>
            <img alt='editIcon' src={editIcon}/>
            </EditUserNameDiv>
            
            <EditUserEmailDiv>
            <p>{props.user.email}</p>
            </EditUserEmailDiv>

            <EditUserCpfDiv>
            <p>{props.user.cpf}</p>
            </EditUserCpfDiv>
        </EditUserCardMainDiv> 
         

  )
}

export default EditUserCard