import React from 'react'
import { logo } from '../assets'


const Hero = () => {
  return (
    <header className='w-full flex justify-center
    items-center flex-col'>
        <nav className='flex justify-between items-center flex-col'>
            <img src={logo} alt='simz_logo' 
            className='w-28 object-contain'/>
        </nav>

        <button 
        type='button'
        onClick={() => window .open('https://github.com/Chrstphr9/SummaBot2.0.git')}
        className='black_btn'
        >
            GitHub
        </button>
    </header>
  )
}

export default Hero