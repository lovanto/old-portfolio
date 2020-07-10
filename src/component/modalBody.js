import React from 'react';

const ModalBody = ({ background, description, badge, line, language, size }) => {
    return (
        <div>
            <div className="row sub-header">
                <div className={`con-2 rounded mb-2 ml-2 background-` + background} />
                <div className="con-7 pl-2 desWorks">
                    {description}
                    <div className="mt-2 mb-1">
                        <span className={`bolder uppercase badge badge-` + badge}>{badge}</span>
                    </div>
                </div>
            </div>
            <div className="containerShowcase row con-10 header">
                <div className="con-3 text-center">
                    {line} +
                            <div className="sub-text">Lines of code</div>
                </div>
                <div className="con-4 text-center">
                    {language}
                    <div className="sub-text">Written in</div>
                </div>
                <div className="con-2 text-center">
                    {size}
                    <div className="sub-text">Size of Project</div>
                </div>
            </div>
        </div>
    );
};

export default ModalBody;
