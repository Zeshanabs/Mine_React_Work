import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='card flex space-x-3 justify-center'>
        <Cards title="card 1" discription="this is the discription for the card 1" />
        <Cards title="card 2" discription="this is the discription for the card 2" />
        <Cards title="card 3" discription="this is the discription for the card 3" />
        <Cards title="card 4" discription="this is the discription for the card 4" />
        <Cards title="card 5" discription="this is the discription for the card 5" />
      </div>
      <Footer/>
    </>
  )
}

export default App
