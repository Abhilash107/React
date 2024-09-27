import { useState } from 'react'
import './App.css'
//import './App.css'
import Accordian from './components/Accordian/Accordian'
import LoadMore from './components/LoadMore/LoadMore'
import RandomColor from './components/RandomColor/RandomColor'
import StarRating from './components/StarRating/StarRating'

function App() {

  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}
      {/* <LoadMore/> */}
      {/* <RandomColor/> */}
      <StarRating noOfStars={5}/>
    </div>

  )
}

export default App
