import React from 'react';

const CardWork = ({ id, modal, text, background }) => {
    
    const showModal = () => {
        document.getElementById(modal).style.display = "block";
        document.getElementById("works").style.display = "none";
        document.getElementById("btn-back").style.display = "none";
    };

    return (
        <div className={`con-2 works-card mar-1 background-`+background} id={id} onClick={showModal}>
            <div className="badge-default">{text}</div>
        </div>
    );
};

export default CardWork;