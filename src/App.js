import React from 'react';
import './App.css';
import BarChart from './MyComponents/chart';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Filterer } from './MyComponents/Filterer';


const App = () => {
  return (
    <div>
      <Header/>
      <BarChart/>
      <Filterer/>
      <Footer/>
    </div>
  )
}
export default App;
