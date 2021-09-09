import React from 'react';
import SlideComponent from './components/SlideComponent.js';
import CardComponent from './components/CardComponent';
import SideNavComponent from './components/SideNavComponent.js';

const App = ()=>{
  return (
    <>
      <SideNavComponent/>
      <SlideComponent/>
      <CardComponent/>
    </>
  );
}
export default App
