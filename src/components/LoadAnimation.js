import React from 'react';
import loadAnimation from './../images/loading.gif';

const LoadAnimation = () => {
    return (
        <img
            src={loadAnimation}
            style={{ width: '100px', height: '100px', margin: 'auto', display: 'block' }}
            alt='Loading...'
        />
    )
}

export default LoadAnimation;