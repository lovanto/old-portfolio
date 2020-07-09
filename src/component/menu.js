import React from 'react';

function Menu() {
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
        <div className="icon-right icon-circle con-close scale-in-center" id="btn-back">X</div>
      </span>
      <div id="btn-about">
        <div className="menu-right side-menu pad-1 slide-right" id="triggerAbout">
          <span onClick={showAbout}>About</span>
        </div>
        <div className="menu-right side-menu pad-1 slide-right-fast set-jap-left hidden">
          私について
        </div>
      </div>
      <div id="btn-works">
        <div className="menu-left side-menu pad-1 slide-left" id="triggerWorks">
          <span onClick={showWorks}>Works</span>
        </div>
        <div className="menu-left side-menu pad-1 slide-left-fast set-jap-right hidden">
          おしごと
        </div>
      </div>
    </article>
  );
}

export default Menu;
