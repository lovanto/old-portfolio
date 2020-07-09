import React from 'react';

function MainMenu() {

    const p = false;
    let displayAbout = 'none';
    let displayWorks = 'none';
  
    if (p) {
      document.getElementById('about').style.display = 'none';
      document.getElementById('works').style.display = 'none';
    }
  
    function showAbout() {
      if (displayAbout === 'none') {
        document.getElementById('about').style.display = 'block';
        document.getElementById('main').style.display = 'none';
        document.getElementById('btn-works').style.display = 'none';
        document.getElementById('btn-about').style.display = 'none';
        document.getElementById('btn-back').style.display = 'block';
        displayAbout = 'block';
      } else {
        document.getElementById('about').style.display = 'none';
        document.getElementById('main').style.display = 'block';
        document.getElementById('btn-works').style.display = 'block';
        document.getElementById('btn-about').style.display = 'block';
        document.getElementById('btn-back').style.display = 'none';
        displayAbout = 'none';
      }
    }
  
    function showWorks() {
      if (displayWorks === 'none') {
        document.getElementById('works').style.display = 'block';
        document.getElementById('main').style.display = 'none';
        document.getElementById('btn-works').style.display = 'none';
        document.getElementById('btn-about').style.display = 'none';
        document.getElementById('btn-back').style.display = 'block';
        document.getElementById('copyright').style.display = 'none';
        displayWorks = 'block';
      } else {
        document.getElementById('works').style.display = 'none';
        document.getElementById('main').style.display = 'block';
        document.getElementById('btn-works').style.display = 'block';
        document.getElementById('btn-about').style.display = 'block';
        document.getElementById('btn-back').style.display = 'none';
        document.getElementById('copyright').style.display = 'block';
        displayWorks = 'none';
      }
    }
    
    return (
        <article>
            <div className="main" id="main">
                <div className="super-header container" align="center">
                    <div className="slide-bottom set-welcome-mid">WELCOME</div>
                    <div className="menu-header">
                        <span onClick={showWorks}>
                            <div className="menu-mobile-border background-web-5 white">WORKS</div>
                        </span>
                        <span onClick={showAbout}>
                            <div className="menu-mobile-border background-web-5 white">ABOUT</div>
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default MainMenu;
