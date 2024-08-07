import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ginti from './component/Ginti';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
 
   <div className='text-center '>
                <p>You Clicked {count} Times</p>
                <button className='border rounded-full p-2 hover:bg-slate-500' onClick={() => setCount(count + 1)}>Click Me</button>
            </div>
   

    <Ginti/>
    </>
  )
}

export default App
