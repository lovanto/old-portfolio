import React from 'react';

function PageAbout() {
    return (
        <article>
            <div className="landing" id="about">
                <div className="container slide-left">
                    <div className="super-header text-center">ABOUT</div>
                    <div className="row">
                        <div className="con-5 pad-2 landing-left ml-5">
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
                                        <div className="icon-img ml-1 roll-in-right mt-1"><a
                                            href="https://github.com/lovanto" target="_blank"><img
                                                src={require('../img/icon/github.png')} className="icon-circle" alt="Github"
                                                width="35" /></a>
                                        </div>
                                        <div className="icon-img ml-1 roll-in-right mt-1"><a
                                            href="mailto:rifkylovanto@gmail.com?" target="_blank"><img
                                                src={require('../img/icon/gmail.png')} className="icon-circle" alt="Gmail"
                                                width="35" /></a>
                                        </div>
                                        <div className="icon-img ml-1 roll-in-right mt-1"><a
                                            href="https://www.linkedin.com/in/lovantoo" target="_blank">
                                            <img src={require('../img/icon/linkedin.png')} className="icon-circle" alt="LinkedIn"
                                                width="35" /></a></div>
                                        <div className="icon-img ml-1 roll-in-right mt-1"><a
                                            href="https://wa.me/6287823837566" target="_blank"><img
                                                src={require('../img/icon/whatsapp.png')} className="icon-circle" alt="WhatsApp"
                                                width="35" /></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="con-1 landing-right">
                            <img className="img-circle img-set-ava"
                                src="https://avatars0.githubusercontent.com/u/57402405?s=460&u=3239a48cd70a2225c6057271f1cbb1385907ec76&v=4"
                                alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default PageAbout;
