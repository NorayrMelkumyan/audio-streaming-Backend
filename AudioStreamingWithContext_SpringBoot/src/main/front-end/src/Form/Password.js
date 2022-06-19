import React, { useState } from 'react';

function Password({ dispatch, validPass }) {
     const [passwordWarning, setPasswordWarning] = useState(true);
     const [passValue, setPassValue] = useState("");

     const onBlurChange = (e) => {
          if (!passValue.match(/[a-z]/g) ||
               !passValue.match(/[A-Z]/g) ||
               !passValue.match(/[0-9]/g) ||
               passValue.length < 8) {
               setPasswordWarning(false);
          }
          else {
               dispatch(e);
               setPasswordWarning(true)
          }
     }
     return (
          <>
               <input
                    type="password"
                    value={passValue}
                    placeholder="Enter your password"
                    onChange={e => setPassValue(e.target.value)}
                    className="text"
                    onBlur={onBlurChange}
               />
               { passwordWarning && <p className = "valid" > { passwordWarning } </p>}

               { !validPass  || !passwordWarning  ? <p className="valid"> Password must contain 8 characters, upper case, lower case and a number </p> : null}   
          </>
     )
}

export default Password