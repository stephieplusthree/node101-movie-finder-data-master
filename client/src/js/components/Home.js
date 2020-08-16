/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import wallpaper from '../../img/wallpaper.jpg';
import logo from '../../img/logo.png';

/**
 * @function Home
 */
const Home = ({ children }) => (
  <div css={JumbotronCSS}>
    <div className="synopsis">
      <img src={logo} />

      <p>
        All he wants to do is leave town and start over. But first, he needs to
        deal with his ex, his new roomie and the enemies who want him dead.
      </p>

      <button type="button">Play</button>
      <button type="button">More Info</button>
     
    </div>

    {children}
  </div>
)

const JumbotronCSS = css`
  position: relative;
  background-image: url('${wallpaper}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 98vh;
  top: 0;

  .synopsis {
    padding-top: 200px;
    padding-left: 60px;
    max-width: 500px;
    color: white;
    padding-left: 60px;

    img {
      width: 100%;
    }

   .Icon {
      margin-right: 10.5px;
      font-size: 18px;
    }
  }

  .ContentRow {
    position: absolute;
    bottom: 20px;
  }
`
export default Home;