
import React from 'react';

const Button = ({ data }) => {
    const buttonStyle = {
        backgroundColor: data.color || 'transparent',
    };

    return (
        <button style={buttonStyle}>
            {data.icon ? (
                <span>{data.icon} {data.text}</span>
            ) : (
                <span>{data.text}</span>
            )}
        </button>
    );
};

export default Button;
