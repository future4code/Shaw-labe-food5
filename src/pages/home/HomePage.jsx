import * as React from "react";
// import AppBar from "@mui/material/AppBar";
import CardImage from "../../components/card/Card";
import SearchAppBar from '../../components/SearchBar/SearchBar';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Future,Section,AppaBars } from "./styled";


const HomePage = () => {
  return (
    <>
      <AppaBars sx={{ backgroundColor: "#FFFFFF" }} align="center">
        <Future>FutureEats</Future>
        <SearchAppBar />
      </AppaBars>
      <Section>
        <CardImage/>
      </Section>
      <NavigationBar/>
    </>
  );
};

export default HomePage;
