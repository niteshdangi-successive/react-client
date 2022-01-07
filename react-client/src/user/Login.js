// import React, { useState} from "react";
import { Form, TextField, Button, FormLayout} from '@shopify/polaris';
import "./Login.css";

// const Login = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState('');

//     const onSubmit = () => {
//         setEmail("");
//         setPassword("");
//         console.log("logined");
//     }


//     return(
//         <div>
//             <Form onSubmit={onSubmit}>
//                 <FormLayout >
//                    <div  className="form-layout" > 
//                         <h1 >Welcome to the Login Page</h1>
//                         <div className="email-field" >
//                             <TextField  label="Email" autoComplete="off" align="left" type="email" onChange={(e) => setEmail(e)} value={email} />
//                         </div>
//                         <div className="password-field" >
//                             <TextField  label="Password" autoComplete="off" align="left" type="password" onChange={(e) => setPassword(e)} value={password} />
//                         </div>
//                         <div  className="btn" >
//                             <Button  submit > Login </Button>
//                         </div>
//                     </div>
//                 </FormLayout>
//             </Form>
//         </div>
//     );
// }

// export default Login;


//  Class based Component --------------------------------------------

import React, {Component} from 'react';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
    email:'',
    password:''
  }
  this.onSubmit = this.onSubmit.bind(this);
 }

 onSubmit(e){

        console.log("logined by :" + this.state.email);
        this.setState({email: '', password: ''});
        e.preventDefault();
    }
render() {
    return (
        <div>
             <Form onSubmit={this.onSubmit}>
                 <FormLayout >
                    <div  className="form-layout" > 
                         <h1 >Welcome to the Login Page</h1>
                         <div className="email-field" >
                             <TextField  label="Email" autoComplete="off" align="left" type="email" onChange={(newValue) => this.setState({email:newValue})} value={this.state.email} />
                         </div>
                         <div className="password-field" >
                             <TextField  label="Password" autoComplete="off" align="left" type="password" onChange={(newValue) => this.setState({password:newValue})} value={this.state.password} />
                         </div>
                         <div  className="btn" >
                             <Button  submit  > Login </Button>
                         </div>
                    </div>
                 </FormLayout>
            </Form>
        </div>


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
    );
  }
}

export default Login;