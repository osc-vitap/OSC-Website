import React from 'react';
import errorAnimation from './../../../images/error.gif';

const Error = () => {
    return (
        <>
            <h1 className="u-event-title">Uh oh! Looks like the page doesn't exist.</h1>
            <img
                src={errorAnimation}
                style={{ width: '300px', height: '300px', margin: 'auto', display: 'block' }}
                alt='Error 404'
            />
        </>
    )
}

export default Error;