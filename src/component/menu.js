import React from 'react';

const Menu = () => {
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

  function backAction() {
    if (document.getElementById('about').style.display === 'block') {
      showAbout();
    } else if (document.getElementById('works').style.display === 'block') {
      showWorks();
    }
  }

  return (
    <article>
      <span className="close" onClick={backAction}>
        <div className="icon icon-right icon-circle icon-close scale-in-center" id="btn-back">X</div>
      </span>
      <div id="btn-about">
        <div className="menu menu-right side-menu pad-1 slide-right" id="triggerAbout">
          <span onClick={showAbout}>About</span>
        </div>
        <div className="menu menu-right side-menu pad-1 slide-right-fast set-jap-left hidden">
          私について
        </div>
      </div>
      <div id="btn-works">
        <div className="menu menu-left side-menu pad-1 slide-left" id="triggerWorks">
          <span onClick={showWorks}>Works</span>
        </div>
        <div className="menu menu-left side-menu pad-1 slide-left-fast set-jap-right hidden">
          おしごと
        </div>
      </div>

      <div className="pageMain" id="main">
        <div className="super-header container" align="center">
          <div className="slide-bottom set-welcome-mid">WELCOME</div>
          <div className="menu-header mt-1p">
            <span onClick={showWorks}>
              <div className="menu-mobile-border background-web-5 white pt-8">WORKS</div>
            </span>
            <span onClick={showAbout}>
              <div className="menu-mobile-border background-web-5 white pt-8">ABOUT</div>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Menu;
