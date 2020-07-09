import React from 'react';

function MainMenu() {
    return (
        <article>
            <div class="main" id="main">
                <div class="super-header container" align="center">
                    <div class="slide-bottom set-welcome-mid">WELCOME</div>
                    <div class="menu-header">
                        <span onclick="showWorks()">
                            <div class="menu-mobile-border background-web-5 white">WORKS</div>
                        </span>
                        <span onclick="showAbout()">
                            <div class="menu-mobile-border background-web-5 white">ABOUT</div>
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default MainMenu;
