import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'  

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative flex flex-col w-full justify-center items-center bg-[url("/gradientBackground.png")] bg-cover bg-no-repeat bg-center min-h-screen'>

      <div className='text-center mb-6'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold leading-[1.2]'>
          Create amazing content 
          with<br />
          
     <span className="text-primary inline-block hover:animate-pulse hover:scale-110 transition duration-300 ease-in-out">
  AI Tools
</span>






        </h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto max-sm:text-xs text-gray-600'>
          Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
        <button 
          onClick={() => navigate('/ai')} 
          className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-110 active:scale-95 transition cursor-pointer'>
          Start creating now
        </button>
        <button 
          className='bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-110 active:scale-95 transition cursor-pointer'>
          Watch demo
        </button>
      </div>

      <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600'>
        <img src={assets.user_group} alt="Users group" className='h-8' />
        Trusted by 10k+ people
      </div>
      
    </div>
  )
}

export default Hero;
