import React from 'react';
import logo from '../assets/images/logo.1.svg';

const NavigationBar = () => (
  <div className="navigation">
    <img className="navigation__brand" src={logo} alt="logo"/>
    <ul className="navigation__list">
      <li className="navigation__list--item" onClick={onSelectHandler}>Cities</li>
      <li className="navigation__list--item" onClick={onSelectHandler}>Discover</li>
      <li className="navigation__list--item" onClick={onSelectHandler}>Blog</li>
      <div className="profile-icon" onClick={onProfileHandler}>Avatar</div>
    </ul>
  </div>
);

let currentTarget = null;

const onSelectHandler = (event) => {
  if( currentTarget ) {
    currentTarget.className = 'navigation__list--item';
  }

  event.target.className = 'navigation__list--item select';
  currentTarget = event.target;
}

const onProfileHandler = () => {
  console.log('OPEN PROFILE PAGE');
}

export default NavigationBar;