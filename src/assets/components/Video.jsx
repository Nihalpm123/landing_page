import React from 'react'
import { FaBook, FaPlay } from "react-icons/fa";



const Video = () => {
  return (
    <>
        <section className='video'>
            <h3 className='video__title'>Grow Your Child's Future</h3>
            <p className='video__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab
                tempore recusandae odio sunt deserunt quos beatae omnis quisquam cumque
            </p>
            <div className='video__controls'>
                <button className='video__button video__button--primary'>
                   <span><FaBook />Learn More</span> 
                </button>
                <button className='video__button video__button--primary'>
                   <span><FaPlay />Watch Video</span> 
                </button>
            </div>
            <div className='video__container'></div>
        </section>
    </>
  )
}

export default Video