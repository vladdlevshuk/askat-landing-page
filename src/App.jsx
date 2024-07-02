import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home.jsx'
import Services from './components/Services.jsx'
import Promo from './components/Promo.jsx'
import Cases from './components/Cases.jsx'
import Newsletter from './components/Newsletter.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Promo />
      <Cases />
      <Newsletter />
    </>
  )
}