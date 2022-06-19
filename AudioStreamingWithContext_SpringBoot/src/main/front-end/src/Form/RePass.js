import React, { useState } from 'react';

function RePass(props) {
   const [password, setPassword] = useState("");
   const [rePassword, setRePassword] = useState('');
   const [validPassword, setValidPassword] = useState(true);
   const [validRePassword, setValidRePassword] = useState( true );

   const checkValidPassword = e => {
      setPassword(e.target.value);
      if (!password.match(/[a-z]/g) ||
      !password.match(/[A-Z]/g) ||
      !password.match(/[0-9]/g) ||
      password.length < 8) {
         setValidPassword( false );
      }
      else {
         setValidPassword( true );
      }
   }

   const checkValidRePassword = (e) => {
      setRePassword(e.target.value);
      if ( password !== "" && password === rePassword) {
         setValidRePassword( true );
         props.dispatch(e);
      } else {
         setValidRePassword( false );
      }
   }

   return (
      <div>
         <input
            type="password"
            placeholder="Enter your password"
            className="text"
            onBlur={checkValidPassword}
         />
         { !validPassword ? <p className="valid" > Password must contain 8 characters, upper case, lower case and a number! </p> :null}
         {/* { validPassword  && <p className="valid">{validPassword}</p>} */}

         <input
            type="password"
            placeholder="Confirm your password"
            className="text"
            onBlur={checkValidRePassword} />
         {/* { validRePassword  && <p className="valid">{validRePassword}</p>} */}
         { !validRePassword || !props.validPass? <p className="valid" > Passwords don't match! </p> :null}

      </div>

   )
}

export default RePass