import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Intro from '../../Components/Intro/Intro';
import Statistics from '../../Components/Statistics/Statistics';
import Boost from '../../Components/Boost/Boost';
import Footer from '../../Components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Intro/>
      <Statistics/>
      <Boost/>
      <Footer/>
    </>
  );
}

export default App;
