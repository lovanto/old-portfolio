import React from 'react';

const CardWork = ({ id, text, background }) => {
    return (
        <div className={`con-2 works-card mar-1 background-`+background} id={id}>
            <div class="badge-default">{text}</div>
        </div>
    );
};

export default CardWork;