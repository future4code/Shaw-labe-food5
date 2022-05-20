import * as React from "react";
// import AppBar from "@mui/material/AppBar";
import { CardImageH } from "../../components/card/Card";
import SearchAppBar from "../../components/SearchBar/SearchBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Future, Section } from "./styled";

const HomePage = () => {
  return (
    <>
      <Future>
        <p>FutureEats</p>
      </Future>
      <SearchAppBar />
      <Section>
        <CardImageH />
      </Section>
      <NavigationBar />
    </>
  );
};

export default HomePage;
