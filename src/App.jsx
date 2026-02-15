import React from 'react'
import { Navbar, Welcome, Dock } from '#components'
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import { Safari, Terminal, Resume, Finder, Text, Image, Contact } from '#windows/index.js';

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
      <Finder />
      <Text />
      <Image />
      <Contact />
    </div>
  )
}

export default App
