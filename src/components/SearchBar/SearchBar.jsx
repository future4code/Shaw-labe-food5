import  React, {useContext} from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ScroolableTabs from "../ScrollableTabs/ScrollableTabs";
import { SearchContainer, Icon } from "./styled";
import { Link } from "react-router-dom";
import { GlobalContext } from '../../global/GlobalContext'

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
  const {states, setters} = useContext(GlobalContext); 
  const {filter} = states; 
  const {setFilter} = setters; 
  const onClcik = () =>{
    setFilter("")
  }
  return (
    <>
      <AppBarr position="static" sx={{ backgroundColor: "#FFFFFF" }}>
        <Link to="/search" style={{textDecorationLine: 'none'}} onClick={()=>onClcik()}>
          <SearchContainer>
            <Icon>
              <svg
                fill="#b8b8b8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
              </svg>
            </Icon>
            <input placeholder="Restaurante" />
          </SearchContainer>
        </Link>
        <ScroolableTabs />
      </AppBarr>
    </>
  );
};
export default SearchAppBar;
