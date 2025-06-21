import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './components/info.jsx'
import About from './components/about.jsx'
import Interests from './components/interests.jsx'
import Footer from './components/footer.jsx'


function App(){
    return (
        <div className="card-wrapper">
          <Info />
          <About />
          <Interests />
          <Footer />
        </div>
    );
}

export default App
