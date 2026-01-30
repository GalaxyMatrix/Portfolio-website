import React from 'react'
import { Navbar, Welcome, Dock } from '#components'
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import { Terminal } from '#windows/index.js';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </div>
  )
}


export default App  
