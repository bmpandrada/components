import React,{Fragment, useEffect} from 'react'
import { carousel } from './data'
import './carousel.css'
import { useState } from 'react'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

 
    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? carousel.length - 1: currentIndex - 1)
    }

    const handleNext = () => {
        setCurrentIndex(currentIndex ===  carousel.length - 1 ? 0 : currentIndex + 1)   
    }
    useEffect(()=>{
       const timeOut = setTimeout(() => {
            setCurrentIndex(currentIndex ===  carousel.length - 1 ? 0 : currentIndex + 1)
            }, 3000);
            return ()=> clearTimeout(timeOut)
    }, [currentIndex, handleNext, handlePrev])
       
    
  

  return (<React.Fragment>
    
  <div className='carousel'>
            <img src={carousel[currentIndex].img_lik} alt="ss" />
             <blockquote>
                <p className='testimonial-text'>
                {carousel[currentIndex].text}
                </p>  
            
             <p className="testimonial-author">
                {carousel[currentIndex].author}
             </p>
             <p className="testimonial-job">
                {carousel[currentIndex].job}
             </p>
             </blockquote>
   
       <button className='btn btn--left' onClick={handlePrev}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='btn-icon'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
       </button>
       <button className='btn btn--right'onClick={handleNext}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='btn-icon'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

       </button>
       <div className="dots" >
       {carousel.map((_,index)=>{
        
       return   <button className={`dot ${index === currentIndex ? 'dot--fill' : ''}`}
       onClick={()=>setCurrentIndex(index)}>&nbsp;</button>
    
       })}
       </div>
    </div>
   
    </React.Fragment>  )
}

export default Carousel