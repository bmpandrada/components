import React from 'react'
import './hero.css'

const Hero = () => {
  return (<>
  <header>
    <nav className='container-hero'>
        <div>logo</div>
        <div>navigation</div>
    </nav>
    <div  className='container-hero container-header'>
      <div className="container-header-inner">

        <h2 className='hero-title'>A healty meal delivered to your door, every single day.</h2>
        <p className='hero-description'>The smat 365-days-per-year food subscription that will make you eat healthy again. Tailored to your taste
            nad nutritional needs.
        </p>
        <a href="" className='btn-hero'>Start eating well</a>
      </div>
    </div>
  </header>
  <section>
    <div  className='container-hero'>
        <h2 className='hero-subtitle'>Some random heading</h2>
        <p className='hero-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Praesentium deleniti cum amet nisi porro voluptatibus accusamus at!
              Aut mollitia maxime harum fuga voluptates magnam quae maiores,
               consequuntur labore, sunt, saepe facilis eveniet dolores.
                Labore aperiam eveniet, reprehenderit rerum accusantium distinctio porro,
                 nobis repellendus dolorum autem, aliquid iusto repudiandae architecto incidunt.</p>
    </div>
  </section>
  </>
    
  )
}

export default Hero