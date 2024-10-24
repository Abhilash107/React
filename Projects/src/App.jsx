import { useState } from 'react'
import './App.css'
//import './App.css'
import Accordian from './components/Accordian/Accordian'
import LoadMore from './components/LoadMore/LoadMore'
import RandomColor from './components/RandomColor/RandomColor'
import StarRating from './components/StarRating/StarRating'
import ImageSlider from './components/ImageSlider/ImageSlider'
import NavigationMenu from './components/NavigationMenu/NavigationMenu'
import menus from './components/NavigationMenu/data'
import QRCodeGenerator from './components/QRCode/QrCode'

function App() {

  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}
      {/* <LoadMore/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={5}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10}/> */}
      {/* <NavigationMenu menus={menus}/> */}
      <QRCodeGenerator/>
    </div>

  )
}

export default App
