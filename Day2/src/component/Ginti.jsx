import React, { useState } from 'react'

const Ginti = () => {
    const [conter , setCount] = useState(2);
  return (
    <div className='text-center'>
      halo ginti
      <p>the power of the privious num is {conter}</p>
      <button className='border rounded-full p-2 hover:bg-slate-500' onClick={()=>setCount(conter**2)}>clickme</button>
    </div>
  )
}

export default Ginti
