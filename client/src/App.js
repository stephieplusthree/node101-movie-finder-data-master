/** @jsx jsx */
import React, { useState, useEffect, createRef } from 'react'
import { Global, css, jsx } from '@emotion/core';
import Navbar from '../src/js/components/Navbar';
import Footer from '../src/js/components/Footer';
import Home from '../src/js/components/Home';
import ContentRow from '../src/js/components/ContentRow';
import DetailPane from '../src/js/components/DetailPane';

const initialRow = {
  category: '',
  pos: { top: 0, bottom: 0 }
}

const categories = [
  'TV Shows',
  'Action',
  'Drama',
  'Comedy',
  'Documentary',
  'Sci-Fi',
  'Reality'
]

/**
 * @function App
 */
const App = () => {
  const [activeRow, setActiveRow] = useState(initialRow)

  const {
    category,
    pos: { top, bottom }
  } = activeRow

  const navRef = createRef()

  const setActive = activeRow => {
    activeRow.category ? setActiveRow(activeRow) : setActiveRow(initialRow)
  }

  useEffect(() => {
    if (!category) return
    const navHeight = navRef.current.offsetHeight

    window.scrollTo({
      top: top + window.scrollY - navHeight,
      left: 0,
      behavior: 'smooth'
    })
  }, [category])

  return (
    <React.Fragment>
      <Global styles={GlobalCSS} />
      <Navbar ref={navRef} />

      <Home></Home>
        <ContentRow category={categories[0]} setActive={setActive} />
      

      {categories.slice(1).map(category => (
        <ContentRow key={category} category={category} setActive={setActive} />
      ))}

      <DetailPane 
        category={category} 
        top={bottom + window.scrollY} 
        setActive={setActive} 
      />
      <Footer />
    </React.Fragment>
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

  i {
    font-size: 18.5px;
  }
`

export default App