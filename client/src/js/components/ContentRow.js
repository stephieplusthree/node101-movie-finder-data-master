import React, { useState, useCallback } from 'react';
// import { jsx, css } from '@emotion/core';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
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
      <div className="ContentRow" style={style.contentRow}
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
          <h2 style={style.genre}>{category}</h2>
            
          <div className="block-wrapper" style={style.blockWrapper}>
            {content.map(img => (
            <ContentBlock
                key={img}
                data-img={img}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                {img === hovered && (
                <div className="content" style={style.content}>
                    <i className="fa fa-play" type="play" style={style.iconplay} />
                    <i className="fa fa-info-circle" type="info-circle" onClick={getPos} style={style.icon} />
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
  
  const ContentBlock = styled.div`
    position: relative; 
    /* puts space in between movie cards */
    flex: calc(18vw - 4px);
    flex-shrink: 0;
    height: 9.5vw;
    margin-right: 4px;
    display: flex;
    img {
      height: 100%;
      width: 100%;
      display: flex;
      pointer-events: none; // Very important!
    }
    h2 {
        margin: 20px 0 10px;
        color: white;
    }
    .block-wrapper {
        display: flex;
        width: 100%;
        position: relative;
    }
    .content {
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
    transition: background-color ease 0.2s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.65);
      cursor: pointer;
    }

    .Icon {
      font-size: 32px;
      color: red;
    }
    
  `

const style = ({
    contentRow: {
        paddingLeft: "60px",
        overflowX: "hidden",
        display: "flex",

    },
    genre: {
        margin: "20px 0 10px",
        color: "white",
    },
    blockWrapper: {
        display: "flex",
        width: "100%",
        position: "relative",
    },
    contentBlock: {
        position: "relative",
        flex: "calc(18vw - 4px)",
        height: "9.5vw",
        marginRight: "4px",
    },
    image: {
        width: "100%",
        height: "100%",
        pointerEvents: "none",
    },
    content: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        transition: "backgrounColor ease 0.2s",
    },
    iconplay: {
        fontSize: "25px",
        color: "red",
        marginRight: "20px",
        marginTop: "25px"
    },
    icon: {
        fontSize: "25px",
        color: "white",
        marginRight: "20px"
    },
})

export default ContentRow;