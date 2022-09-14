import React from "react";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width:"100%",
        position:"fixed",
        bottom:0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "40px",
          backgroundColor: "#272782",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        paddingBottom:"10px",
        
        }}
      >
        <Box
          sx={{ 
            marginLeft: "20px",
            color: "#FFFFFF",
          }}
        >
          <p>Terms & Conditions | Privacy Policy</p>
        </Box>
        <Box
          sx={{
            color: "#FFFFFF",

            marginRight: "100px",
          }}
        >
          <p>© SEBI All Rights Reserved - Website Owned and Managed by SEBI</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
