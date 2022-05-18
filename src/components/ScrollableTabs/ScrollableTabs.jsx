import  React,{useState,useEffect} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";

const ScroolableTabs = () => {
  const [value, setValue] = useState(0);
  const [rest, setRest] = useState([]);

  const getRest = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5xaGJpbWR4NGZmQ3BTaElJWElKIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTc4IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6InJ1YSBhc3Ryb2RldiwgMTAsIDEgLSBMdWx1IiwiaWF0IjoxNjUyNzk4MTI4fQ.hScs9KQ_9H-rGqYCJEGFGnScdIZoEMp0UxwD4oAy6WY";
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
    const result = rest.filter((curData) =>{
      return curData.category === catItem 
    })
    setRest(result)
   

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
          <Tab  onClick={()=>filterResult("Árabe")} label="Árabe" />
          <Tab  onClick={()=>filterResult("Asiática")} label="Asiática" />
          <Tab  onClick={()=>filterResult("Hamburguer")} label="Hamburguer" />
          <Tab  onClick={()=>filterResult("Italiana")} label="Italiana" />
          <Tab  onClick={()=>filterResult("Sorvetes")} label="Sorvetes" />
          <Tab  onClick={()=>filterResult("Carnes")} label="Carnes" />
          <Tab  onClick={()=>filterResult("Baiana")} label="Baiana" />
          <Tab  onClick={()=>filterResult("Petiscos")} label="Petiscos" />
          <Tab  onClick={()=>filterResult("Mexicana")} label="Mexicana" />         
        </Tabs>
      
    </>
  );
};
export default ScroolableTabs;
