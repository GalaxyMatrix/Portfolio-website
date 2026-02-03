import React from 'react'
import { Navbar, Welcome, Dock } from '#components'
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import { Safari, Terminal,  Resume } from '#windows/index.js';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
    </div>
  )
}


export default App  
