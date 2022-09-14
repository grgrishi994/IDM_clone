import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import PasswordIcon from "@mui/icons-material/Password";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    maxHeight: 500,
    width: 600,
    maxWidth: 900,
    borderRadius: 20,
    "-webkit-box-shadow":
      "0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)",
    "box-shadow":
      "0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)",
    "--softUIEffect-3": "inset 3px 3px 5px #b8b9be, inset -3px -3px 6px #fff",
  },
  field: {
    "box-shadow":
      "inset 3px 3px 6px #b8b9be, inset -3px -3px 6px rgb(253, 253, 253)",
  },
}));
const theme = createTheme();

const Activate = () => {
  //   const handleSubmit = (event) => {
  //     {
  //       /* event.preventDefault(); */
  //     }
  //     const data = new FormData(event.currentTarget);
  //     console.log(event);

  //     console.log({
  //       first_name: data.get("first name"),
  //       last_name: data.get("last name"),
  //       email: data.get("email"),
  //       password: data.get("password"),
  //       mobile_number: data.get("mobile number"),
  //     });
  //   };

  const cardStyles = useStyles(theme);

  return (
   

    <ThemeProvider theme={theme}>
    <Container
       component="main"
        maxWidth="sm"
        sx={{
          margin: "auto",
          align: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card className={cardStyles.root}>
          <CssBaseline />
          <Box
          
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Box
              sx={{
                marginLeft:"50px",
                px: 20,
                width: 830,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                //         backgroundColor: {
                //   xxs: "red",
                //   xs: "orange",
                //   sm: "yellow",
                //   md: "green",
                //   lg: "blue",
                //   xl: "purple"
                // }
              }}
            >
              <Box>
                <Avatar
                  sx={{
                    m: 1,
                    bgcolor: "blue",
                    marginRight: 2,
                    width: 60,
                    height: 60,
                    boxShadow: "rgba(0, 0, 0, 0.74) 0px 3px 8px",
                  }}
                >
                  <PasswordIcon color="blue" fontSize="large" />
                </Avatar>
              </Box>

              <Box>
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{
                    color: "Blue",
                    fontWeight: 600,
                    align: "center",
                  }}
                >
                  Enter the OTP
                </Typography>
              </Box>
            </Box>

            <Box
              component="form"
              noValidate
              sx={{
               
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                className={cardStyles.field}
                sx={{
                   
                  borderRadius: "10px",
                  mx: 6,
                  width: "30%",
                  marginTop:"20px"
                }}
                size="small"
                placeholder="Enter the OTP"
                name="otp"
              />
              
              
              <Button
                type="submit"
                variant="contained"
                sx={{
                    bgcolor:"mediumBlue",
                    mt: 3,
                  maxWidth: 130,
                  borderRadius: 2,
                  height: 30,
                  fontWeight: 850,
                  fontSize: 12,
                }}
              >
                <span style={{ padding: 10}}>Activate{"     "}</span>
                <TaskAltIcon fontSize="small" />
              </Button>
            </Box>
            <p style={{ display: "flex", alignItems: "center",marginTop:"20px"  }}>
             <b>
             Didn't recieve a mail? <a href="#">Resend It</a>
             </b>
           </p>
          
          </Box>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Activate;
