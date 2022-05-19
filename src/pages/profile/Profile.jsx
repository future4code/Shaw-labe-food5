import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { ProfilePageMainDiv,LoadingDiv } from './styled'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { getUserInfo } from '../../services/requests';
import EditUserCard from '../../components/EditUserCard/EditUserCard';
import loading from '../../assets/myLoading.svg';

const ProfilePage = () => {

    const [open, setOpen] = useState(''); 
    const [messageError, setMessageError] = useState(''); 
    const [userInfo, setUserInfo] = useState({}); 
    


useEffect(()=>{
let token = window.sessionStorage.getItem('token'); 

getUserInfo('profile',token,setOpen,setMessageError, setUserInfo)

},[])


    return (
        <ProfilePageMainDiv>
            <Header title="Meu perfil" hideBackButton={false} /> 
            {userInfo && userInfo.name ? <EditUserCard user = {userInfo}/> :<LoadingDiv> <img alt='loading' src={loading} /></LoadingDiv>}

            <NavigationBar/>
        </ProfilePageMainDiv>
    )
}

export default ProfilePage