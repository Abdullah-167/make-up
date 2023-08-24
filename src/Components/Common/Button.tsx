import React, { useState } from 'react';

const Button = ({ btnText, borderRadius, padding, backgroundColor, border, hoverBackgroundColor, color, hoverColor }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        borderRadius: borderRadius,
        padding: padding,
        color: isHovered ? hoverColor : color,
        backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
        border: border,
        transition: 'background-color 0.4s ease',
    };

    return (
        <button>
            <div
                className=""
                style={{ ...buttonStyle }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className="relative">{btnText}</span>
            </div>
        </button>
    );
}

export default Button;
