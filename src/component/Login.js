import * as React from 'react';
import login from './login.png';
import hbg from './hbg.jpg';
import Logo1 from './Logo1.png';
import loginnew from './loginnew.jpg';
import loginbgnew1 from './loginbgnew1.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
function Login()
{
    return(
         <div class="loginparent">

         {/* <img class="loginbg" src={loginbg} alt="Logo1"/> */}

         <div class="logo">
         {/* <img class="img2" src={Logo1} alt="Logo1"/> */}
        </div>
         {/* <img class="bg1" src={hbg} alt="Logo1"/> */}

         <div className="lmain">
         <img class="loginimg1" src={loginnew} alt="LoginImage"/>
         <div className="Login">
           {/* <h1 class="head">SmartCart</h1> */}
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <form>
          <br></br>
          <br></br>
         <p class="Lname">LOGIN</p>
         <label for="username">Username</label>
         <br></br>
         <TextField id="username" label="Username" variant="outlined" required/>
         <br></br> 
         <br></br>
         <label for="password">Password</label> 
         <TextField id="password" label="Password" variant="outlined" required/>
         <br></br>
         <br></br>
         <Link to= '/home'> <button class="submit1"><span>SignIn</span> </button></Link> 
         <br></br>
         <br></br>
         <label for="newuser">NewUser?</label>
         <Link to= '/Signup' className='link'><span>Signup!</span></Link>
         </form>
         </Box>
         </div>
         </div>
         </div>
    )
}
export default Login