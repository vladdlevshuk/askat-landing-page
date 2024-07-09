import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home.jsx'
import Services from './components/Services.jsx'
import Promo from './components/Promo.jsx'
import Cases from './components/Cases.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import HowWeWork from './components/HowWeWork.jsx'
import Technologies from './components/Technologies.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Promo />
      <Cases />
      <HowWeWork />
      <Technologies />
      <Newsletter />
      <Footer />
    </>
  )
}