import React, { useState} from "react";
import { Form, TextField, Button, FormLayout} from '@shopify/polaris';
import "./Login.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const emailValidation = () => {
        let REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email === "") {
          setEmailError("email is required")
        }
        else if(email.match(REGEX)){
          setEmailError("")
        }
        else {
          setEmailError("please Enter valid Email")
        }
      }


      const passwordErrorValidation = () => {
        if(password === ""){
          setPasswordError('Password is required')
        }
        else {
          setPasswordError("")
        }
      }
     const passwordValidation = () => {
         let REGEX = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$";
         if(password.match(REGEX)) {
           return true;
         }
         else {
           return false;
         }
       }


       const onSubmit = () => {
        let pass = passwordValidation();
        if(emailError !== "") {
          alert('Email is not Valid and not proper format read the instruction carefully.')
        }
        else if(!pass) {
          alert('Password is not Valid because minumum six inputs are allowed. ')
        }
        else {
          window.alert("email:"+ email + "  password: " + password);
          setEmail('');
          setPassword('');
          }
      }


    // const onSubmit = () => {
    //     setEmail("");
    //     setPassword("");
    //     console.log("logined");
    // }


    return(
        <div>
            <Form onSubmit={onSubmit}>
                <FormLayout >
                   <div  className="form-layout" > 
                        <h1 >Welcome to the Login Page</h1>
                        <div className="email-field" >
                            <TextField  label="Email" autoComplete="off" align="left" type="email" onChange={(e) => setEmail(e)} onBlur = {emailValidation} value={email} />
                            <span className = "error">{emailError}</span>
                        </div>
                        
                        <div className="password-field" >
                            <TextField  label="Password" autoComplete="off" align="left" type="password" onChange={(e) => setPassword(e)} onBlur = {passwordErrorValidation} value={password} />
                            <span className = "error">{passwordError}</span>
                        </div>
                        
                        <div  className="btn" >
                            <Button  submit > Login </Button>
                        </div>
                    </div>
                </FormLayout>
            </Form>
        </div>
    );
}

export default Login;


//  Class based Component --------------------------------------------

// import React, {Component} from 'react';
// class Login extends Component {
// constructor(props){
//   super(props);
//   this.state={
//     email:'',
//     password:''
//   }
//   this.onSubmit = this.onSubmit.bind(this);
//  }

//  onSubmit(e){

//         window.alert("Email: " + this.state.email + "  Password: " + this.state.password);
//         this.setState({email: '', password: ''});
//         e.preventDefault();
//     }
// render() {
//     return (
//         <div>
//              <Form onSubmit={this.onSubmit}>
//                  <FormLayout >
//                     <div  className="form-layout" > 
//                          <h1 >Welcome to the Login Page</h1>
//                          <div className="email-field" >
//                              <TextField  label="Email" autoComplete="off" align="left" type="email" onChange={(newValue) => this.setState({email:newValue})} value={this.state.email} />
//                          </div>
//                          <div className="password-field" >
//                              <TextField  label="Password" autoComplete="off" align="left" type="password" onChange={(newValue) => this.setState({password:newValue})} value={this.state.password} />
//                          </div>
//                          <div  className="btn" >
//                              <Button  submit  > Login </Button>
//                          </div>
//                     </div>
//                  </FormLayout>
//             </Form>
//         </div>


    //   <div>
    //     <MuiThemeProvider>
    //       <div>
    //       <AppBar
    //          title="Login"
    //        />
    //        <TextField
    //          hintText="Enter your Username"
    //          floatingLabelText="Username"
    //          onChange = {(event,newValue) => this.setState({email:newValue})}
    //          />
    //        <br/>
    //          <TextField
    //            type="password"
    //            hintText="Enter your Password"
    //            floatingLabelText="Password"
    //            onChange = {(event,newValue) => this.setState({password:newValue})}
    //            />
    //          <br/>
    //          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
    //      </div>
    //      </MuiThemeProvider>
    //   </div>
//     );
//   }
// }

// export default Login;
