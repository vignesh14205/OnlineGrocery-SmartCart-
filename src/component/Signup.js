import * as React from 'react';
import signupnew from './signupnew.png';
import loginbg5 from './loginbg5.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
class Signup extends React.Component
{
    render()
    {
        return(
            <div class='parent2'>

            
            <div class="smain">
            {/* <div class="logo">
            <img class="img2" src={Logo1} alt="Logo1"/>
            <h1 class="head">SmartCart</h1>
            </div> */}
            <img class="bg" src={loginbg5} alt="Logo1"/>
            <div class="sform">
            <img class="img1" src={signupnew} alt="Logo1"/>
                <div class="form2">
                <h1 class="head">SmartCart</h1>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box>
                    <form>
                    <p class="SUP">SIGNUP</p>
                    <label for="Uname">Username</label>
                    <br></br>
                    <TextField id="username" label="Username*" variant="outlined"/>
                    <br></br>
                    <br></br>
                    <label for="email">Email</label>
                    <br></br>
                    <TextField id="email" label="Email*" variant="outlined"/>
                    <br></br>
                    <br></br>
                    <label for="Pass">CreatePassword</label>
                    <br></br>
                    <TextField id="password" label="Createpassword*" variant="outlined"/>
                    <br></br>
                    <br></br>
                    <label for="number">PhoneNumber</label>
                    <br></br>
                    <TextField id="number" label="Phonenumber*" variant="outlined"/>
                    <br></br>
                    <br></br>
                    <Link to= '/home'><button class="submit"> <span>Signup</span></button> </Link>
                    </form>
                    </div>
                </div>
                </div>
                </div>
        )
    }
}

export default Signup

// import * as React from 'react';
// import signupnew from './signupnew.png';
// import loginbg5 from './loginbg5.jpg';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Link } from 'react-router-dom';

// class Signup extends React.Component {
//   state = {
//     username: '',
//     email: '',
//     password: '',
//     phoneNumber: '',
//     error: '',
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic form validation
//     const { username, email, password, phoneNumber } = this.state;

//     if (!username.trim() || !email.trim() || !password.trim() || !phoneNumber.trim()) {
//       this.setState({ error: 'Please fill in all fields.' });
//       return;
//     }

//     // Additional validation logic can be added here

//     // If validation passes, you can proceed with signup logic
//     console.log('Signup successful!');
//   };

//   handleChange = (field, value) => {
//     // Update state when input values change
//     this.setState({ [field]: value });
//   };

//   render() {
//     const { username, email, password, phoneNumber, error } = this.state;

//     return (
//       <div class='parent2'>
//         <div class="smain">
//           <img class="bg" src={loginbg5} alt="Logo1" />
//           <div class="sform">
//             <img class="img1" src={signupnew} alt="Logo1" />
//             <div class="form2">
//               <h1 class="head">SmartCart</h1>
//               <Box
//                 component="form"
//                 sx={{
//                   '& > :not(style)': { m: 1, width: '25ch' },
//                 }}
//                 noValidate
//                 autoComplete="off"
//               ></Box>
//               <form>
//                 <p class="SUP">SIGNUP</p>
//                 <label htmlFor="Uname">Username</label>
//                 <br />
//                 <TextField
//                   id="username"
//                   label="Username*"
//                   variant="outlined"
//                   value={username}
//                   onChange={(e) => this.handleChange('username', e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <label htmlFor="email">Email</label>
//                 <br />
//                 <TextField
//                   id="email"
//                   label="Email*"
//                   variant="outlined"
//                   value={email}
//                   onChange={(e) => this.handleChange('email', e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <label htmlFor="Pass">Create Password</label>
//                 <br />
//                 <TextField
//                   id="password"
//                   label="Createpassword*"
//                   variant="outlined"
//                   type="password"
//                   value={password}
//                   onChange={(e) => this.handleChange('password', e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <label htmlFor="number">Phone Number</label>
//                 <br />
//                 <TextField
//                   id="number"
//                   label="Phonenumber*"
//                   variant="outlined"
//                   value={phoneNumber}
//                   onChange={(e) => this.handleChange('phoneNumber', e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <button class="submit" onClick={this.handleSubmit}>
//                   <span>Signup</span>
//                 </button>
//                 <br />
//                 <br />
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Signup;
