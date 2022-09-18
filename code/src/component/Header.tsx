import React, { useState } from 'react';
import cn from 'classnames';

type HeaderProps = {
  type: 'default' | 'minify'
};

function Header({ type }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <header className={cn('header', {
      'header-default': type === 'default',
      'header-minify': type === 'minify',
    })}
    >
      <div className="logo-container">
        {type}
        Logo
      </div>

      <nav className={cn('navbar', {
        'opened-navbar': isSidebarOpen,
      })}
      >
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li className="navbar-signInButton">
            <button
              type="button"
            >
              войти
            </button>
          </li>
        </ul>
      </nav>

      <button type="button" className="signInButton">войти</button>
      <button
        type="button"
        className="burger"
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
          console.log(isSidebarOpen);
        }}
      >
        burger
      </button>
    </header>
  );
}

export default Header;
