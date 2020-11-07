import React from 'react';
import "./Header.css";

function Header({
    headTitle
}) {
    return (
        <div className="container-head">
            <div id="block1">
                <div className="page-title">{headTitle}</div>
            </div>
            <div id="block2"></div>
            <div id="block3"></div>
            <div id="block4"></div>
            <div id="block5"></div>
        </div>
    )
}

export default Header
