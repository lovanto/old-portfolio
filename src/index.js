import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';
import Menu from './component/menu';
import MainMenu from './component/mainMenu';
import About from './component/pageAbout';
import Works from './component/pageWorks';
import Footer from './component/footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Works />
    <MainMenu />
    <About />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
