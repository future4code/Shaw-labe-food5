import {  BottomNavigationAction } from '@mui/material'
import * as React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Navbar } from './styled';

const NavigationBar = () => {
  return (
    <>
      
      <Navbar>
            <BottomNavigationAction icon={<HomeIcon/>} />
            <BottomNavigationAction icon={<ShoppingCartIcon />} />
            <BottomNavigationAction icon={<AccountBoxIcon />} />
        </Navbar>
    </>
  );
};

export default NavigationBar;