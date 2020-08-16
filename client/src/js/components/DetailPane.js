/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import Icon from './Icon'

const DetailPane = ({ category, top, setActive }) =>
  category && (
    <div
        css={[
          DetailPaneCSS,
          css`
            top: ${top}px;
          `
        ]}
    >
      <Icon type="times" onClick={setActive} />
    </div>
  )

const DetailPaneCSS = css`
  height: 475px;
  background: black;
  width: 100%;
  position: absolute;
  border: 2px solid white;
  z-index: 99;
  color: white;

  .Icon.times {
    font-size: 32px;
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  h1 {
    margin-top: 0;
  }

  .pane-wrapper {
    padding: 2vw 4vw 0;

    img {
      margin-bottom: 20px;
    }
  }
`

export default DetailPane;