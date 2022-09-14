import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import { bgcolor } from "@mui/system";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:40,
    maxHeight: 500,
    width: 500,
    maxWidth: 900,
    background: '#EEEEEE',
    boxShadow: '0px 3px 15px #BCB0B0',
    borderRadius: 5,
  },
  
}));
const theme = createTheme();

const Reset = () => {
  const cardStyles = useStyles(theme);

  return (
    <div >
      <Header />
      <Container
        component="main"
        maxWidth="sm"
      
      >
        <Card className={cardStyles.root}>
          <Box
            sx={{
             
              margin: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{
                    
                    display: "flex",
                    alignItems: "center",
                    color: "#272782",
                    fontWeight: "400",
                    height: "45px",
                    left: "702px",
                    top: "340px",
                    fontStyle: "normal",
                    fontWeight: " 500",
                    fontSize: "22px",
                    lineHeight: "42px",
                  }}
                >
                 RESET PASSWORD
                </Typography>
              </Box>

              <Box
                sx={{
                 
                   width: "60%",
                  height: "2px",
                  backgroundColor: "#272782",
                  marginTop: "10px",
                }}
              ></Box>
            </Box>

            <Box
              component="form"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  marginLeft: "90px",
                  fontWeight: "600",
                  fontSize: "15px",
                  lineHeight: "21px",
                  color: "#272782",
                }}
              >
                <p>NEW PASSWORD</p>
                <TextField
                  variant="standard"
                  placeholder="Enter New Password"
                  sx={{
                    width: "75%",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  marginLeft: "90px",
                  fontWeight: "600",
                  fontSize: "15px",
                  lineHeight: "21px",
                  color: "#272782",
                }}
              >
                <p>CONFIRM PASSWORD</p>
                <TextField
                  variant="standard"
                  placeholder="Enter Confirm Password"
                  sx={{
                    width: "75%",
                  }}
                />
              </Box>
              <Box 
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
               <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 5,
                 width:'175px',
                  borderRadius: 0,
                  height: 40,
                  fontWeight: 200,
                  fontSize: '20px',
                  lineHeight: '23px',
                  display:"flex",
                  align:"center",
                  color:'#FFFFFF',
                }}
              >
                <span style={{ padding: 10 }}>Submit{"     "}</span>
              </Button>
              </Box> 
            </Box>
          </Box>
        </Card>
      </Container>
      <Footer/>
    </div>
  );
};

export default Reset;
