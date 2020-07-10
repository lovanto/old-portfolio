import React from 'react';
import CardWork from './cardWork.js'

function PageWorks() {
    return (
        <article>
            <div className="works" id="works" align="center">
                <div className="container slide-right">
                    <div className="super-header mb-5 black">WORKS</div>
                    <div className="row mb-3">
                        <div className="con-3 min-header">
                            <div className="mb-1">Website</div>
                        </div>
                        <div className="row con-7 sub-header white bolder mlm-1">
                            <CardWork id="btnCovid" text="COVID-19 TODAY" background="web-7" />
                            <CardWork id="btnPortfolio" text="PORTFOLIO" background="web-6" />
                            <CardWork id="btnAurora" text="AURORA" background="web-5" />
                            <CardWork id="btnPamAir" text="PAM AIR" background="web-4" />
                            <CardWork id="btnBlog" text="PERSONAL BLOG" background="web-3" />
                            <CardWork id="btnSiBunda" text="SIBUNDA" background="web-2" />
                            <CardWork id="btnLibon" text="ONLINE LIBRARY" background="web-1" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="con-3 min-header">
                            <div className="mb-1">Android</div>
                        </div>
                        <div className="row con-7 sub-header white bolder mlm-1">
                            <CardWork id="btnGithubApp" text="GITHUB API APP" background="andro-1" />
                            <CardWork id="btnBookon" text="BOOKON" background="andro-2" />
                            <CardWork id="btnMMA" text="MMA" background="andro-3" />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default PageWorks;
