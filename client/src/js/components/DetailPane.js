import React from 'react';
import DetailPaneNav from './DetailPaneNav';
// import { css, jsx } from '@emotion/core';

const DetailPane = ({ category, pos, setActive }) => category && (
    <div style={style.container}>
        <DetailPaneNav />
        <li style={style.li}><i className="fa fa-times" onClick={setActive}></i></li>
    </div>
)

const style = ({
    container: {
        height: "475px",
        backGround: "black",
        width: "100%",
        position: "absolute",
        border: "2px solid white",
        top: "${pos + scrollY}px",
        listStyleType: "none",
    },
    li: {
        fontSize: "32px",
        color: "white",
        position: "absolute",
        right: "20px",
        top: "20px",
        cursor: "pointer",
    }
})

export default DetailPane;