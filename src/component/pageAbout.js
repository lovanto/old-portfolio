import React from 'react';
import CircleIcon from './circleIcon.js'

const PageAbout = () => {
    return (
        <article>
            <div className="pageAbout" id="about">
                <div className="container slide-left">
                    <div className="super-header text-center">ABOUT</div>
                    <div className="row">
                        <div className="con-5 pad-2 pageAbout-left ml-5">
                            <p className="header">
                                Hi, I'm Rifky Lovanto
                            </p>
                            <p className="sub-header">
                                I'm a software engineering student. I like to make programs especially in website
                                programming but I'm still studying about it and now living in Indonesia.
                                <br />
                                If you have suggestions for me, please contact me through the
                                contact below, I like learning new things because that can make me better. &nbsp; ありがとう.
                            </p>
                            <div className="row">
                                <div className="mt-1 ml-2">
                                    <div className="row">
                                        <CircleIcon linkTo="https://github.com/lovanto" img={require('../img/icon/github.png')} alt="Github" size="35" />
                                        <CircleIcon linkTo="mailto:rifkylovanto@gmail.com?" img={require('../img/icon/gmail.png')} alt="Gmail" size="35" />
                                        <CircleIcon linkTo="https://www.linkedin.com/in/lovantoo" img={require('../img/icon/linkedin.png')} alt="LinkedIn" size="35" />
                                        <CircleIcon linkTo="https://wa.me/6287823837566" img={require('../img/icon/whatsapp.png')} alt="Whatsapp" size="35" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="con-1 pageAbout-right">
                            <img className="img-circle img-set-ava"
                                src="https://avatars0.githubusercontent.com/u/57402405?s=460&u=3239a48cd70a2225c6057271f1cbb1385907ec76&v=4"
                                alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PageAbout;
