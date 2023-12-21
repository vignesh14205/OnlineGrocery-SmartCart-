import * as React from 'react';
import login from './login.png';
import loginbg5 from './loginbg5.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
function Login()
{
    return(
         <div class="parent">

         {/* <img class="loginbg" src={loginbg} alt="Logo1"/> */}

         {/* <div class="logo">
         <img class="img2" src={Logo1} alt="Logo1"/>
         <h1 class="head">SmartCart</h1>
         </div> */}
         <img class="bg1" src={loginbg5} alt="Logo1"/>

         <div className="main">
         <img class="loginimg1" src={login} alt="LoginImage"/>
         <div className="Login">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <form>
         <p class="Lname">LOGIN</p>
         <label for="username">Username</label>
         <TextField id="username" label="Username*" variant="outlined"/>
         <br></br>
         <label for="password">Password</label> 
         <TextField id="password" label="Password*" variant="outlined"/>
         <br></br>
         <br></br>
         <Link to= '/home'> <button class="submit1"><span>SignIn</span> </button></Link> 
         <br></br>
         <br></br>
         <label for="newuser">NewUser?</label>
         <Link to= '/Signup'> <button class="submit1"><span>Signup!</span> </button></Link>
         </form>
         </Box>
         </div>
         </div>
         </div>
    )
}
export default Login