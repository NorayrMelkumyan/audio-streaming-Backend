import React, { useState } from "react";
import Email from "./Email";
import Password from './Password';
import RememberMe from "./RememberMe";
import Submit from "./Submit";
import './../Styles/FormStyles.css';
import SignUp from "./SignUp";


function SignIn({ onClose, signIn, enterEmail, enterPass, LoggedIn }) {


  const [validEmail, setValidEmail] = useState (true);
  const [validPass, setValidPass] = useState (true);
  const [register, setRegister] = useState(false);
 
  // const URL = 'http://localhost:3000/users';

  const URL = "https://jsonplaceholder.typicode.com/users";
 
  const formSignIn = (e) => {
    e.preventDefault();

    if (signIn.email === "") {
      setValidEmail( false );
      return false;
    } else {
      setValidEmail ( true );
    }
     if ( signIn.pass === "") {
      setValidPass ( false );
      return false;
    } else {
      setValidPass ( true );
    }

    console.log(signIn, "signIn")
    
    fetch(`${URL}?email=${signIn.email}`)
      .then(response => {
        if (response.status >= 200 || response.status < 210) {
          console.log(response, "response")
          return response.json()
        }
        else console.log("we have an error")
      })
      .then(data => {
        console.log(data, "daata");
     
        LoggedIn();
        onClose();



      })
      .catch(erro => console.log("error"))
  
}



  return (
    <>
  { register  ?
   <SignUp onClose = {() => {setRegister(false);}}/> 
   : (
    <div className="wrapp_form" id = "SignIn">
      { console.log(signIn)}
      
      <div className="SignIn popup">
        <span className="close_popup" onClick={onClose} >x</span>
        <form 
        method="POST"
         onSubmit={formSignIn}
         >
        <h3>Sign In</h3>
          <Email
          validEmail = { validEmail}
            placeHolder="Enter your email..."
            dispatch={ e => enterEmail(e) }
          />
          <Password
            dispatch={ e => enterPass(e) }
            validPass = { validPass }
          />
          <RememberMe />
          <Submit 
            buttonValue="SIGN IN"
          />
            <p  style = {{margin: 0, fontSize: '0.9rem'}} > If you have not registered yet, please <a href = '#' style = {{fontWeight: 'bold'}}
             onClick = {() => setRegister(true)}
             >Sign Up</a></p>
           
        </form>
      
      </div> 
    </div>
   )
    } 
   
    </>
  );
}

/*const mapStateToProps = state => {
  console.log(state, "stateee")
  return {
    signIn: state.signIn,
  }
}

const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    enterEmail,
    enterPass,
  },
    dispatch
  )
}*/

export default SignIn;
