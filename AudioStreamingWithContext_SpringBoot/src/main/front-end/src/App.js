import React from "react";
import {useState} from "react";
import Header from './Main/Header/Index';
import UserPage from "./User page/IndexUserPage.js"
import Footer from './Main/Footer';
import './Styles/Header.css';
import './Styles/App.css';
import './Styles/Footer.css';
import './Styles/Guest.css';
import IndexGuest from "./Main/Guest/IndexGuest";


function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoggedIn = () => setIsLoggedIn(true);
  const LoggedOut = () => setIsLoggedIn(false);

  return (
      <div className="App">
        { !isLoggedIn ?
            <>
              <Header  LoggedIn = { LoggedIn }  LoggedOut = { LoggedOut }/>
                <IndexGuest/>
            </>
            :
            <UserPage  LoggedOut = { LoggedOut } />
        }
        <Footer />
      </div>
  );
}

export default App;
