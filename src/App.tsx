import './assets/scss/App.scss'
import Header from './assets/components/Header/Header'
import "./app.scss"
import { Route, Routes } from 'react-router-dom'
import IndividualItem from './assets/components/Main/individualItem/IndividualItem'
import CarrouselContainer from './assets/components/Main/carrousel/CarrouselContainer'
import Imagen5List from './assets/components/Main/imagenList5/ImagenList5'
import Galeria from './assets/components/Main/galeria/Galeria'
import HomePage from './assets/components/views/HomePage'
import Footer from './assets/components/Footer/Footer'





function App() {
  
  return (
    <div className='appContainer'>
      <Header/>
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/gallery" element={<Galeria />} />
        <Route path="/gallery/:category" element={<Galeria />} />
        <Route path="/:id" element={<CarrouselContainer/>} />
        <Route path="/about" element={<IndividualItem/>} />
        <Route path="/manual" element={<Imagen5List/>} />
        <Route path="*" element={<h2>¡Oops! Page not found!</h2>} />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
