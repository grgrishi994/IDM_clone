import React from "react";
import sebi from "../img/sebi.png"
import azadi from "../img/azadi_logo.png"
import Box from "@mui/material/Box";
import { Container, height } from "@mui/system";
import { Card } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Image from 'material-ui-image'
import './Header.css';


const Header = () => {
  return (
       <Box className="Box1"
       sx={{
           display:'flex',
           flexDirection:"column",
           width:"100%",
          overFlow:"hidden"
       }}>
      
       <Box
       className="logo"
        sx={{
         
        marginLeft:'40px',
        marginBottom:'30px',
        marginTop:'20px',
        height:'57px',
        display:'flex',
        justifyContent:"space-between",
        width:"100%"
       }}>
        <Box sx={{
          // bgcolor:"red",
         marginTop:'10px',
         width:'446px',
          height:'20px',
        }}>
           <img src={sebi} 
            height="50px"
            width="90%"
           />
        </Box>
        <Box sx={{
          // marginBottom:'200px',      //kaam nhi kr rha
          marginRight:'200px',
         //paddingBottom:'20px',
        }}>
        <img src={azadi} height="80px" width="150px"/>
        </Box>
        </Box>
        <Box
      sx={{
        width: '100%',
        height: "40px",
        backgroundColor: '#272782',
      }}
    ></Box>
       </Box>
  );
};

export default Header;
