import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { ProfilePageMainDiv,LoadingDiv, PastOrdersDiv, TitleDiv } from './styled'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { getUserInfo } from '../../services/requests';
import EditUserCard from '../../components/EditUserCard/EditUserCard';
import loading from '../../assets/myLoading.svg';
import EditAddressCard from '../../components/EditAddressCard/EditAddressCard';

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
            <Header title="Meu perfil" hideBackButton={true} /> 
            {userInfo && userInfo.name ? <EditUserCard user = {userInfo}/> :<LoadingDiv> <img alt='loading' src={loading} /></LoadingDiv>}
            <EditAddressCard address = {userInfo.address} /> 
            <PastOrdersDiv>
                <TitleDiv>
                    <p>Histórico de pedidos</p>
                </TitleDiv>
            </PastOrdersDiv>
            <NavigationBar/>
        </ProfilePageMainDiv>
    )
}

export default ProfilePage