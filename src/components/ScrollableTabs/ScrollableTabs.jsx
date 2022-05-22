import  React,{useState,useEffect, useContext} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import { GlobalContext } from '../../global/GlobalContext'

const ScroolableTabs = () => {
  const [value, setValue] = useState(0);
  const [rest, setRest] = useState([]);
  const {states, setters} = useContext(GlobalContext); 
  const {filter} = states; 
  const {setFilter} = setters; 

  const getRest = () => {
    const token =
      window.sessionStorage.getItem('token'); 
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/restaurants",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setRest(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filterResult = (catItem) => {
    setFilter(catItem)
  }
  useEffect(() => {
    getRest();
  }, []);
  return (
    <>
     
        <Tabs 
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"          
        >
          <Tab  onClick={()=>filterResult("")} label="Todos"/>
          <Tab  onClick={()=>filterResult("Árabe")} label="Árabe"/>
          <Tab  onClick={()=>filterResult("Asiática")} label="Asiática"/>
          <Tab  onClick={()=>filterResult("Hamburguer")} label="Hamburguer"/>
          <Tab  onClick={()=>filterResult("Italiana")} label="Italiana"/>
          <Tab  onClick={()=>filterResult("Sorvetes")} label="Sorvetes"/>
          <Tab  onClick={()=>filterResult("Carnes")} label="Carnes"/>
          <Tab  onClick={()=>filterResult("Baiana")} label="Baiana"/>
          <Tab  onClick={()=>filterResult("Petiscos")} label="Petiscos"/>
          <Tab  onClick={()=>filterResult("Mexicana")} label="Mexicana "/>         
        </Tabs>
      
    </>
  );
};
export default ScroolableTabs;
