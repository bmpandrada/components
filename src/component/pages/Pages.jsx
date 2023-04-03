import React, { useState } from 'react'
import './pages.css'

const Pages = () => {
    const [value, setValue] = useState(true);
    const handleClick = (indexCurrent) => {
        console.log(indexCurrent);
    }
  return (
    <div className='paganation'>
      
        <button className='btn-page' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btn-page-icon w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
</svg>
</button>
        
<a href="" className='page-link pageHover'>1</a>
<a href="" className='page-link current-page'>2</a>
<a href="" className='page-link'>3</a>
<a href="" className='page-link'>4</a>
<a href="" className='page-link'>5</a>
<a href="" className='page-link'>6</a>
<span className='the-dots '>...</span>
<a href="" className='page-link'>23</a>
<button className='btn-page'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btn-page-icon w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
</svg>
</button>
    </div>
  )
}

export default Pages