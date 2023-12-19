import * as React from 'react';
import login from './login.png';
import Logo1 from './Logo1.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
function Login()
{
    return(
         <div class="parent">
         <div class="logo">
         <img class="img2" src={Logo1} alt="Logo1"/>
         <h1 class="head">SmartCart</h1>
         </div>
         <div className="main">
         <img class="img1" src={login} alt="LoginImage"/>
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
         <TextField id="username" label="Username*" variant="outlined" />
         {/* <input type="text" id="username" placeholder='Username*'></input> */}
         <br></br>
         <label for="password">Password</label> 
         <TextField id="password" label="Password*" variant="outlined" />
         <br></br>
         <br></br>
         <button class="submit">SignIn</button>
         <br></br>
         <br></br>
         <label for="newuser">NewUser?</label>
         <button>
            <Link to= '/Signup'>
            Don't have an account? <span id="colorchange">Signup Here</span>
            </Link> 
            </button>
         </form>
         </Box>
         </div>
         </div>
         </div>
    )
}
export default Login