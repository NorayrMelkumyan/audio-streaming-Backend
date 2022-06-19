import React, { useState } from "react";


function Email(props) {
    const [emailWarning, setEmailWarning] = useState(true);

    const regEx = (text) => {

        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return text.match(mailformat);
    }
    

    const onBlurChange = (e) => {
        if (!regEx(e.target.value) ) { 
            setEmailWarning(false);
           
        } else  {
             setEmailWarning(true);
             props.dispatch(e);
        }
    };

    return (
      
        <div>
            <input
                type="email"
                placeholder="Enter your email..."
                className="text"
                onBlur={onBlurChange}
            />
            { !emailWarning  || !props.validEmail ? <p className = "valid"> Email adress is not valid! </p> : null}
        </div>
    );
};

export default Email;
