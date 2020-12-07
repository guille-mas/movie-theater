import React from 'react';
import './App.scss';
import { Logo, Star, Search, Expand, Close, ArrowLeft, ArrowRight } from './icons';

function App() {
  return (
    <div className="App">
      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
      <Logo/>
      <Star/>
      <Search/>
      <Expand/>
      <Close/>
      <ArrowLeft/>
      <ArrowRight/>

    </div>
  );
}

export default App;
