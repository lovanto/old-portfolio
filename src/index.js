import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.scss';

import Menu from './component/menu';
import About from './component/pageAbout';
import DetailWork from './component/detailWork';
import Works from './component/pageWorks';
import Footer from './component/footer';


const App = () => {
  return (
    <React.StrictMode>
      <Menu />
      <Works />
      <DetailWork />
      <About />
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));