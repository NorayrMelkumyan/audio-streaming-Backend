import React from "react";

const HeaderButton = ({ onButtonClick }) => {
    return (
        <div className = "headerButton">
            <div className={"signIn"}><a href = "#SignIn" onClick={() => onButtonClick('signIn')}>Sign In </a></div>
            <div><a href = "#SignUp" onClick={() => onButtonClick('signUp')}>Sign Up</a></div>
        </div>
    )
}

export default HeaderButton
