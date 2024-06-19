import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/scss/App.scss'
import "./app.scss"
import Header from './assets/components/Header/Header'
import Footer from './assets/components/Footer/Footer'

// import CarrouselContainer from './assets/components/Main/carrousel/CarrouselContainer'
// import Imagen5List from './assets/components/Main/imagenList5/ImagenList5'
// import Galeria from './assets/components/Main/galeria/Galeria'
// import HomePage from './assets/components/views/HomePage'
// import AcercaDe from './assets/components/Main/acercaDe/AcercaDe'
// import ExpoVirtual from './assets/components/Main/expoVirtual/ExpoVirtual'

const CarrouselContainer = lazy(() => import('./assets/components/Main/carrousel/CarrouselContainer'));
const Imagen5List = lazy(() => import('./assets/components/Main/imagenList5/ImagenList5'));
const Galeria = lazy(() => import('./assets/components/Main/galeria/Galeria'));
const HomePage = lazy(() => import('./assets/components/views/HomePage'));
const AcercaDe = lazy(() => import('./assets/components/Main/acercaDe/AcercaDe'));
const ExpoVirtual = lazy(() => import('./assets/components/Main/expoVirtual/ExpoVirtual'));




function App() {
  
  return (
    <div className='appContainer'>
      <Header/>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/gallery" element={<Galeria />} />
          <Route path="/gallery/:category" element={<Galeria />} />
          <Route path="/:id" element={<CarrouselContainer/>} />
          <Route path="/about" element={<AcercaDe/>} />
          <Route path="/manual" element={<Imagen5List/>} />
          <Route path="/virtual" element={<ExpoVirtual/>} />
          <Route path="*" element={<h2>¡Oops! Page not found!</h2>} />
        </Routes>
      <Footer/>
      </Suspense>
      
    </div>
  )
}

export default App
