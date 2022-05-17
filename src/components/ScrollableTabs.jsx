import  React,{useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// const TabsScroll=styled.a(Tabs)`
//    width: 360px;
//   height: 42px;
//   margin: 8px 0 0;
//   padding: 12px 0 12px 16px;
// `
// const TabScroll=styled(Tabs)`
// font-size: 16px;
// letter-spacing: -0.39px;
// color: #5cb646;
// `
const ScroolableTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Tabs sx={{ 
       bgcolor: "background.paper",
       fontFamily: "Roboto', sans-serif",
        }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>
    </>
  );
};
export default ScroolableTabs;
