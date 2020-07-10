import React from 'react';

const CircleIcon = ({ linkTo, style, img, alt, size }) => {
    return (
        <div className={'icon-img ml-1 roll-in-right mt-1 ' + style}><a
            href={linkTo} target="_blank"><img
                src={img} className="icon-circle" alt={alt}
                width={size} /></a>
        </div>
    );
};

export default CircleIcon;