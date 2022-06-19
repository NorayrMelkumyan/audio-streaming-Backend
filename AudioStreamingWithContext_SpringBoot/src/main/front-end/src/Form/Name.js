import React, { useState } from "react";


function Name(props) {
    const [warning, setWarning] = useState( true );
    

const onBlurChange = (e) => {
    if (e.target.value === "" || e.target.value === undefined ) {
        setWarning ( false );
    } else {
        props.dispatch(e);
        setWarning ( true ) 
    };

}

    return (
        <div className = "name_wrapper">
            <input 
            type="text"
            placeholder={props.placeHolder} 
            className="name" 
            onBlur = { onBlurChange }
            />

            { (!warning || !props.validName ) ? <span className  = "valid" > Fill in the field! </span> : null}
        </div>
    );
};

export default Name