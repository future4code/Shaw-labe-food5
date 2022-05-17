import * as React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import CardImage from "../../components/card/Card";
import SearchAppBar from "../../components/SearchBar";
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const Section = styled.main`
  position: relative;
  top: 18vh;
  height: 80vh;
  overflow: hidden;
  overflow-y: scroll;
`;
const Future = styled.h4`
  letter-spacing: -0.39px;
  size: 16px;
  width: 175px;
  height: 44px;
  margin: 20px 92px 0 93px;
  padding: 13px 50.5px 12px;
  font-weight: 400;
`;

const HomePage = () => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#FFFFFF" }} align="center">
        <Future>FutureEats</Future>
        <SearchAppBar />
      </AppBar>
      <Section>
        <CardImage />
      </Section>
      <NavigationBar/>
    </>
  );
};

export default HomePage;
