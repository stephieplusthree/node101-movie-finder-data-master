import React from 'react';
// import { css, jsx } from '@emotion/core';

const DetailPane = ({ category = true }) => category && (
    <div style={style.container}>
        <li><i className="fa fa-times"></i></li>
    </div>
)

const style = ({
    container: {
        height: "475px",
        backGround: "black",
        width: "100%",
        position: "absolute",
        border: "2px solid white",
    },
    icon: {
        fontSize: "32px",
        color: "white",
        position: "absolute",
        right: "20px",
        top: "20px",
        cursor: "pointer",
    }
})

export default DetailPane;