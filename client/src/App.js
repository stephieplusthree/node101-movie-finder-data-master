import React, { useState, useEffect } from 'react';
import { Global, css, jsx } from '@emotion/core';
import Navbar from '../src/js/components/Navbar';
import Footer from '../src/js/components/Footer';
import Home from '../src/js/components/Home';
import ContentRow from '../src/js/components/ContentRow';
import DetailPane from '../src/js/components/DetailPane';

const initalRow = {
  category: '',
  pos: { top: 0, bottom: 0 }
}

// @function App
 

const App = () => {
  const [activeRow, setActiveRow] = useState(initalRow)

  //create variables to grab from activeRow
  const {
    category,
    pos: { top, bottom }
  } = activeRow

  useEffect(() => {
    if(!category) return

    window.scrollTo({
      top: top + window.scrollY,
      left: 0,
      behavior: "smooth"
    })
  }, [category])

  const setActive = activeRow => {
    activeRow.category ? setActiveRow(activeRow) : setActiveRow(initalRow) 
  }

  return (
    <>
      <Global styles={GlobalCSS} />
      <Navbar />

      <Home />
    
      <ContentRow category="Latest Releases" setActive={setActive} />

      <DetailPane category={category} pos={bottom} setActive={setActive} />
      <Footer />
    </>
  )
}

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  .app {
    margin: 0;
    min-height: 100%;
    width: 100%;
  }

  body {
    background: #151515;
  }

  a {
    text-decoration: none;
    color: white;
  }

  p {
    font-size: 20px;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  button {
    background-color: rgba(51, 51, 51, 0.8);
    border: 1px solid white;
    padding: 0.75em 2.3em;
    border-radius: 0.2vw;
    box-shadow: none;
    font-size: 1.1vw;
    color: white;
    margin-right: 15px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
  }

  .Icon {
    font-size: 18.5px;
    cursor: pointer;
    color: white;
  }
`

export default App;

