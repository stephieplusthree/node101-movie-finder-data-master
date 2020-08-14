import React, { useState, useEffect, forwardRef } from 'react';
import { css, jsx } from '@emotion/core';
import netflixLogo from '../../img/netflix-logo.jpg'

const leftLinks = ['Home', 'TV Shows', 'Movies', 'Latest', 'My List']

//Navbar function

const Navbar = forwardRef((props, ref) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      window.pageYOffset > 75 ? setScrolled(true) : setScrolled(false)

    const onScroll = window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav
        className="navbar navbar-expand-lg navbar-white"
      ref={ref}
      css={[
        NavbarCSS,
        scrolled
          ? css`
              background-color: rgb(20, 20, 20);
              background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.7) 10%,
                rgba(0, 0, 0, 0)
              );
            `
          : css`
              background: transparent;
            `
      ]}
    >
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="navbar-brand" href="/">
            <img height="75" src={netflixLogo} />
          </a>
        </li>

        {leftLinks.map(link => (
          <li className="nav-item" key={link}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <i className="fa fa-search"></i>
        </li>
        <li className="nav-item">
          <i className="fa fa-bell"></i>
        </li>
      </ul>
    </nav>
  )
})

const NavbarCSS = css`
  position: fixed;
  height: 68px;
  z-index: 99;
  width: 100%;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    margin-right: 100px;
    display: flex;
  }
  a {
    font-size: 15px;
    letter-spacing: 0.5px;
    color: #e5e5e5;
    display: flex;
  }
  a.active {
    color: white;
    font-weight: 500;
  }
  ul.right {
    .Icon {
      color: white;
      cursor: pointer;
      font-size: 22px;
      display: flex;
    }
  }
`

export default Navbar;














