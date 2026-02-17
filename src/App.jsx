import React from 'react'
import { Navbar, Welcome, Dock, Home } from '#components'
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, Photos } from '#windows/index.js';

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
      <Home />
      <Photos />
    </div>
  )
}

export default App
