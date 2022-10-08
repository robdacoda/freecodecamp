import React from 'react'
import logo from '../logo.svg';

const Header = () => {
  return (
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div> Markdown Previewer</div>
      </header>
  )
}

export default Header