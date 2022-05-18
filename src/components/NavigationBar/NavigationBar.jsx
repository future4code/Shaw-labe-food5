import { BottomNavigationAction } from "@mui/material";
import * as React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { Navbar } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToHome, goToCart, goToProfile } from "../../routes/cordinator";
import styled from "styled-components";

const  ButtonIcons = styled(BottomNavigationAction)`
  .MuitButtonBase-root{
    width: 120px;
  height: 49px;
  padding: 11px 46px 11px 47px;
  color: #5cb646;
  }
  .MuiSvgIcon-root{
    color:#b8b8b8;
  }
  
`
const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar>
        <BottomNavigationAction
          onClick={() => goToHome(navigate)}
          icon={<HomeOutlinedIcon color="primary"/>}
        />
        <ButtonIcons
          onClick={() => goToCart(navigate)}
          icon={<ShoppingCartOutlinedIcon />}
        />
        <ButtonIcons
          onClick={() => goToProfile(navigate)}
          icon={<AccountBoxOutlinedIcon  />}
        />
      </Navbar>
    </>
  );
};

export default NavigationBar;
