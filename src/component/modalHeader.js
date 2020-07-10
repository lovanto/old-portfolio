import React from 'react';

const ModalHeader = ({ id, link, firstNameModal, lastNameModal }) => {

    function closeModal() {
        document.getElementById(id).style.display = "none";
        document.getElementById("works").style.display = "block";
        document.getElementById("btn-back").style.display = "block";
    }

    return (
        <div>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <div className="header-plus mb-1">
                <span className="blue">
                    <a href={link} target="_blank" rel="noopener noreferrer">{firstNameModal}</a>
                </span> {lastNameModal}
            </div>
            <hr />
        </div>
    );
};

export default ModalHeader;