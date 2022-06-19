import React from "react";
import {useState} from "react";


function TextLess({text, max = 190}) {
    const [showLess, setShowLess] = useState(true);

    if (text.length <= max) {
        return (
            <span>
                {text}
            </span>
        )
    }

    return (
        <p className = "p">
            { showLess ?  `${text.substring(0, max)} ...` : text}
            <a href = "#" onClick = {(e)=>{
                   e.preventDefault();
                   setShowLess(!showLess);
            }} >{showLess ? " more" : " less"} </a>
        </p>

    )
}

export default TextLess;
