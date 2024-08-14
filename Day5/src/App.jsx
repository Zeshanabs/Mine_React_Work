import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email: "" , phone: ""})

  function clik(){
    console.log("allah akbar")
  }

  function hali() {
    alert("salam alakum")
  }
function changeee(e){
setForm({...form, [e.target.name]:e.target.value})
console.log(form );
}

  return (
    <>
  <div className="button">
    <button onClick={clik}>Click Me</button>
  </div>
  <div  className="red">
    I am a red div
  </div>
<input  type="text" name='email' value={form.email} onChange={changeee} />
<input type="text" name='phone' value={form.phone} onChange= {changeee} />

    </>
  )
}

export default App
