/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import ContentBlock from './ContentBlock';

import one from '../../img/one.jpg';
import two from '../../img/two.jpg';
import three from '../../img/three.jpg';
import four from '../../img/four.jpg';
import five from '../../img/five.jpg';
import six from '../../img/six.jpg';

const content = [one, two, three, four, five, six]

const ContentRow = ({ category, setActive }) => {
  const [hovered, setHovered] = useState(false)
  
  const handleHover = useCallback(e => {
        e.type === 'mouseenter'
          ? setHovered(e.target.getAttribute('data-img'))
          : setHovered(false)
      }, [])
  
  const getPos = useCallback(e => {
    const pos = e.target.parentElement.getBoundingClientRect()
    setActive({ category, pos })
  }, [])

  return (
    <div
      className="ContentRow"
      css={css`
        padding-left: 60px;
        overflow-x: hidden;
        display: inline-block;
      `}
    >
      <div
        css={css`
          h2 {
            margin: 20px 0 10px;
            color: white;
          }
          .block-wrapper {
            display: flex;
            width: 100%;
            position: relative;
          }
        `}
      >
        <h2>{category}</h2>

        <div className="block-wrapper">
          {content.map(img => (
            <ContentBlock key={img} img={img}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {img === hovered && (
                <div className="content">
                  <i className="fa fa-play" type="play" />
                  <i className="fa fa-info-circle" type="info-circle" onClick={getPos} />
                </div>
              )}
              
              <img src={img} />
            </ContentBlock>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentRow;