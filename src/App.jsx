import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Cases from './components/Cases.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Cases />
    </>
  )
}