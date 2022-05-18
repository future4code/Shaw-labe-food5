import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ScroolableTabs from "./ScrollableTabs";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "95vw",
  margin: "2vw",
  height: "56px",
  alignItems: "center",
  border: "1px solid  #b8b8b8",
  marginTop: "-9px",
}));
const AppBarr = styled(AppBar)`
  background-color: #ffffff;
  border-top: 1px solid #b8b8b8;
  box-shadow: none;
`;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  color: "GrayText",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({}));

const SearchAppBar = () => {
  return (
    <>
      <AppBarr position="static" sx={{ backgroundColor: "#FFFFFF" }}>
        <IconButton />

        <Search sx={{ backgroundColor: "#FFFFFF" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Restaurante "
            sx={{
              backgroundColor: "#FFFFFF",
              fontFamily: "'Roboto', sans-serif",
              textTransform: "none",
            }}
          />
        </Search>

        <ScroolableTabs />
      </AppBarr>
    </>
  );
};
export default SearchAppBar;
