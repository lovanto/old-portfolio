import React from 'react';

function Menu() {
  return (
    <article>
      <span class="close" onclick="backAction()">
        <div class="icon-right icon-circle con-close scale-in-center" id="btn-back">X</div>
      </span>
      <div id="btn-about">
        <div class="menu-right side-menu pad-1 slide-right" id="triggerAbout">
          <span onclick="showAbout()">About</span>
        </div>
        <div class="menu-right side-menu pad-1 slide-right-fast set-jap-left hidden">
          私について
        </div>
      </div>
      <div id="btn-works">
        <div class="menu-left side-menu pad-1 slide-left" id="triggerWorks">
          <span onclick="showWorks()">Works</span>
        </div>
        <div class="menu-left side-menu pad-1 slide-left-fast set-jap-right hidden">
          おしごと
        </div>
      </div>
    </article>
  );
}

export default Menu;
