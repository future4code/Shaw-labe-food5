import  React from "react";
// import AppBar from "@mui/material/AppBar";
import { CardImageH } from "../../components/card/Card";
import SearchAppBar from "../../components/SearchBar/SearchBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Future, HomePageMainContainer, Section } from "./styled";
import { PopUp } from "../../components/popUp/PopUp";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import Header from '../../components/Header/Header';

const HomePage = () => {


  useProtectedPage(); 
 
  return (
    <HomePageMainContainer>
      {/* <Future>
        <p>FutureEats</p>
      </Future> */}
      <Header title="FutureEats" hideBackButton={true}/>

      <SearchAppBar />
      <Section>
        <CardImageH />
      </Section>
      <PopUp/>
      <NavigationBar />
    </HomePageMainContainer>
  );
};

export default HomePage;
