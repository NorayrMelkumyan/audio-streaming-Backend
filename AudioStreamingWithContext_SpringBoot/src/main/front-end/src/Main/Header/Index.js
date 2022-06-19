import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import Logo from "./Img";
import SignIn from "./../../Form/SignIn";
import SignUp from "./../../Form/SignUp";

const Header = ({ LoggedIn,  LoggedOut }) => {
    //

    const [mode, setMode] = useState('');
    const [isOpen, setIsOpen] = useState(false)

    const handleButtonClick = (buttonType) => {
        setIsOpen(true);
        setMode(buttonType);
    };

    const onClose = () => setIsOpen(false);
    //
    return (
        <nav className="app-header" >
            <Logo  LoggedOut = { LoggedOut } />
            <HeaderButton onButtonClick={(handleButtonClick)} />
            {isOpen && mode === 'signIn' ? <SignIn
                LoggedIn={LoggedIn}
                onClose={(onClose)}
            /> : null}
            {isOpen && mode === 'signUp' ? <SignUp
             
                LoggedIn={LoggedIn}
                onClose={(onClose)}
            /> : null}
        </nav>
    )
}

export default Header