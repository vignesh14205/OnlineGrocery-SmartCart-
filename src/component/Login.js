import login from './login.png';
import { Link } from 'react-router-dom';
import Logo1 from './Logo1.png';

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
         <form>
         <p class="Lname">LOGIN</p>
         <label for="username">Username</label>
         <input type="text" id="username" placeholder='Username*'></input>
         <br></br>
         <label for="password">Password</label> 
         <input type="password" id="password" placeholder='Password*'></input>
         <br></br>
         <br></br>
         <button class="submit">SignIn</button>
         <br></br>
         <br></br>
         <label for="newuser">NewUser?</label>
         <a href='Signup.js' class="sigin">Signup</a>
         </form>
         </div>
         </div>
         </div>
    )
}
export default Login