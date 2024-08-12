import { useState , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setcolor] = useState(0);
const a = useRef();

//run when the color was changed
//   useEffect(()=> {
// alert("the count was changed")
// setcolor(color + 1)

//   },[count])

useEffect (()=>{
console.log(`hy i am `)
a.current.style.backgroundColor = "red"
})



  return (
    <>
    <Navbar color={"blue" + "green" + color}/>
    <p>you click {count} times</p>
    <button ref={a} onClick={(a)=>setCount(count+1)} className='border rounded-full p-2'> click me</button>
    <button onClick={()=>a.current.style.display = "none"}>on click</button>
    </>
  )
}

export default App
