import React from 'react'

const Cards = (props) => {
  return (
    <div className='card border px-2 py-1 w-70 h-80 border-solid border-green-800 my-28 grid space-y-12'>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*F7v7mAmssKFRAMMQS8WmXA.png" alt="" />
        <div className='bottom-0'>
        <h1 className='font-bold text-2xl bottom-0'>{props.title}</h1>
        <p className='bottom-0'>{props.discription}</p>
        </div>
    
    </div>
  )
}

export default Cards
