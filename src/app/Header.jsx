import React from 'react';
import Icon from './../assets/icon.png';
import "./App.css";

const Header = () => (
    <div>
        <span>
            <img className="App-logo" src={Icon} alt="Just Cinemas"/>
            <label className="App-title">Just Cinemas</label>
        </span>
    </div>
);

Header.defaultProps = {};

export default Header;
 