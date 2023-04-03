import Accordion from './accordion/Accordion'
import Carousel from './carousel/Carousel'
import './element.css'
import Pages from './pages/Pages'
import Table from './table/Table'

const Elements = () => {
 


  return (
    <div className='container'>
        
        <div className="container-element">
     
            <div className="col container-col-1">
            <h1>Modal</h1>
            <Accordion />
            </div>
           
            <div className="col container-col-2">
            <h1>Carousel</h1>
                <Carousel />
            </div>
        
            <div className="col container-col-3">
            <h1>Table</h1>
              <Table />
            </div>
            <div className="col container-col-4">
            <h1>Pages</h1>
              <Pages />
            </div>
            <div className="col container-col-5">5</div>
            <div className="col container-col-6">6</div>
            <div className="col container-col-7">7</div>
            <div className="col container-col-8">8</div>
        </div>
    </div>
  )
}

export default Elements