import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'


const Hero = () => {
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    // GSAP animation for content
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
  }, [])

  const toggleVideoPlayback = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div
      className='h-screen w-screen relative overflow-hidden'

    >
 
   

      <img
      src='https://static2.tripoto.com/media/filter/tst/img/765686/TripDocument/1564738457_1564738455215.jpg'
      className="absolute top-0 left-0 w-full h-full object-cover"
      alt='Hero Background'
      />


      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>


      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1 className='text-6xl font-bold text-white mb-4'>
          25+ Years of Excellence <br />
          <span className='text-[#937A4B]'>in Tracking</span>
        </h1>
        <p className='text-white max-w-2xl'>
          Discover breathtaking destinations with Asansol Trekkers. Join us for unforgettable adventures!
        </p>
        <div className="flex mt-6 space-x-4">
          <button className='bg-[#937A4B] text-white px-6 py-3 rounded-md transition duration-300 shadow-lg'>
            Explore Now
          </button>
          <button className='bg-white text-[#937A4B] px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300 shadow-lg'>
            Contact Us
          </button>
        </div>
      </div>

   
    </div>
  )
}

export default Hero