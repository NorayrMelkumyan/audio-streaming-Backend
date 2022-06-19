import React, { useState } from 'react';
import Email from "./Email";
import Name from './Name';
import RePass from './RePass';
import RememberMe from "./RememberMe";
import Submit from "./Submit";
import Birthday from './Birthday';
import Countries from './Countries';
import SignIn from './SignIn';


function SignUp(props) {

  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPass, setValidPass] = useState(true);
  const [birthday, setBirthday] = useState(true);
  const [countries, setCountries] = useState(true);
  const [login, setLogin] = useState(false);

  // const URL = 'http://localhost:3000/usersplaceholder.typicode.com/users';
  const URL = "https://jsonplaceholder.typicode.com/users";


  const formSignUp = (e) => {
    e.preventDefault();
    console.log(props.signUp, "signUp");

    if (props.signUp.firstName === "") {
      setValidFirstName(false);
      return false;
    } else {
      setValidFirstName(true);
    }

    if (props.signUp.lastName === "") {
      setValidLastName(false);
      return false;
    } else {
      setValidLastName(true);
    }

    if (props.signUp.email === "") {
      setValidEmail(false);
      return false;
    } else {
      setValidEmail(true);
    }

    if (props.signUp.pass === "") {
      setValidPass(false);
      return false;
    } else {
      setValidPass(true);
    }

    // if (props.signUp.birthday === "") {
    //   setBirthday ( false);
    //   return false;
    // } else {
    //   setBirthday (true);
    // }

    if (props.signUp.countries === "") {
      setCountries(false);
      return false;
    } else {
      setCountries(true);
    }


    console.log(props.signUp, "signUp")
    const url = `${URL}?username=${props.signUp.username}&email=${props.signUp.password}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.signUp),
    })
      .then(response => {
        if (response.status >= 200 || response.status < 210) {
          console.log(response, "response")
          return response.json()
        }
        else console.log("we have an error")
      })
      .then((response) => {
        console.log(response)

        // props.LoggedIn()
          .then(data => {

            console.log(data)
          })
      })
      .catch(erro => console.log("error"))

  }



  return (
    <>
      {login ?
        <SignIn onClose={() => { setLogin(false); }} />
        : (
          <div className="wrapp_form">
            <div className="SignIn  popup">
              <span className="close_popup" onClick={props.onClose} >x</span>
              <form onSubmit={formSignUp}>
                <h3>Sign Up</h3>
                <div className="wrap_scroll">
                  <div id="name" >
                    <Name
                      placeHolder="First name..."
                      dispatch={e => props.enterUserFirstName(e)}
                      validName={validFirstName}
                    />
                    <Name
                      placeHolder="Last name..."
                      dispatch={e => props.enterUserLastName(e)}
                      validName={validLastName}
                    />
                  </div>
                  <Email
                    dispatch={e => props.enterUserEmail(e)}
                    validEmail={validEmail}
                  />
                  <RePass
                    dispatch={e => props.enterUserPass(e)}
                    validPass={validPass}
                  />
                  <Birthday
                    dispatch={e => props.enterUserBirthday(e)}
                    birthday={birthday}
                  />
                  <Countries
                    dispatch={countries => props.enterUserCountries(countries)}
                    countries={countries}
                  />
                  <RememberMe />
                </div>
                <Submit buttonValue="SIGN UP" />
                <p style={{ margin: 0, fontSize: '0.9rem' }}>If you are already registered, <a href="#" style={{ fontWeight: 'bold' }}
                  onClick={() => setLogin(true)}
                >Sign In</a> </p>
              </form>
            </div>
          </div>
        )
      }
    </>
  );
}


/*
const mapStateToProps = state => {
  console.log(state, "stateee")
  return {
    signUp: state.signUp,
  }
}

const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    enterUserEmail,
    enterUserPass,
    enterUserBirthday,
    enterUserFirstName,
    enterUserLastName,
    enterUserCountries,
  },
    dispatch
  )
}
*/

export default SignUp;
