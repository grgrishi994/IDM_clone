import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Header from "../components/Header";
import { bgcolor } from "@mui/system";
import Footer from "../components/Footer";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    maxHeight: 500,
    width: 400,
    maxWidth: 900,
    borderRadius: 5,
    boxShadow: "0px 3px 15px #BCB0B0",
    background: " #EEEEEE",
  },
}));
const theme = createTheme();

const Login = () => {
  let navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // function validateFields({ email, password }) {
  //   var correctEmail = validators.validateEmail(email);
  //   var correctPass = password ? true : validators.validatePassword(password);
  //   return correctEmail && correctPass;
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
  const errors = validate(formValues);
   Object.keys(errors).length === 0 ? 
     navigate("/reset"): setIsSubmit(true)
  };


   const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "true";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  const cardStyles = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth="xs">
        <Card className={cardStyles.root}>
          <Box
            sx={{
              margin: "20px",
              marginLeft: "10px",
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
                    //bgcolor:"red",
                    display: "flex",
                    alignItems: "center",
                    color: "#272782",
                    fontWeight: "400",
                    // width: "107px",
                    height: "45px",
                    left: "702px",
                    top: "340px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: " 400",
                    fontSize: "36px",
                    lineHeight: "42px",
                  }}
                >
                  LOGIN
                </Typography>
              </Box>
              <Box
                sx={{
                  //display: "flex",
                  //flexDirection: "row",
                  //justifyContent: "center",
                  width: "60%",
                  height: "2px",
                  backgroundColor: "#272782",
                  marginTop: "10px",
                }}
              ></Box>
            </Box>
           
            <Box  component="form"
            onSubmit={handleSubmit}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  marginLeft: "75px",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#272782",
                }}
              >
                <p sx={{}}>EMAIL-ID</p>
                <TextField
                  variant="standard"
                  name="email"
                  type="email"
                  placeholder="Enter email id"
                  value={formValues.email}
                  onChange={handleChange}
                  required 
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
                  marginLeft: "75px",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#272782",
                }}
              >
                <p>Password</p>
                <TextField
                  variant="standard"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={formValues.password}
                  onChange={handleChange} 
                  required
                  sx={{
                    width: "75%",
                  }}
                />
               
              </Box>
              <Box
                sx={{
                  //display:"flex",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",

                  // bgcolor:"red",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  //onClick={handleSubmit}
                  sx={{
                    bgcolor: "#272782",
                    mt: 5,
                    width: "175px",
                    borderRadius: 0,
                    height: 40,
                    fontWeight: 200,
                    fontSize: "20px",
                    lineHeight: "23px",
                    display: "flex",
                    align: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <span style={{ padding: 10 }}>Login{"     "}</span>
                </Button>
              </Box>
            </Box>
            
          </Box>
        </Card>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Login;
