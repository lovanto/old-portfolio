import React from 'react';
import ModalHeader from './modalHeader.js';
import ModalBody from './modalBody.js'

const DetailWorks = ({ id, link, firstNameModal, lastNameModal, background, description, badge, line, language, size, img1="", img2="", img3="", img4="" }) => {

    let image1 = "", image2 = "", image3 = "", image4 = "";
    if (img1 !== "") {
        image1 = <img src={img1} alt="IMAGE 1" />
    }
    if (img2 !== "") {
        image2 = <img src={img2} alt="IMAGE 2" />
    }
    if (img3 !== "") {
        image3 = <img src={img3} alt="IMAGE 3" />
    }
    if (img4 !== "") {
        image4 = <img src={img4} alt="IMAGE 4" />
    }

    return (
        <div id={id} className="modal">
            <div className="modal-content slide-bottom">
                <ModalHeader id={id} link={link} firstNameModal={firstNameModal} lastNameModal={lastNameModal} />
                <ModalBody
                    background={background}
                    description={description}
                    badge={badge}
                    line={line}
                    language={language}
                    size={size}
                />

                {image1}
                {image2}
                {image3}
                {image4}
            </div>
        </div>
    );
}

export default DetailWorks;
