import React from 'react'

const Carousel = () => {
  return (
    <section className="row">
    <div className="col-md-12">
        
        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
            
            <div className="carousel-inner">
                <div className="carousel-item active"><img src="images/kioo.jpg" alt="" className='d-block li '/></div>
                <div className="carousel-item "><img src="images/disc.jpg" alt="" className='d-block li '/></div>
                <div className="carousel-item"><img src="images/recordi.webp" alt="" className='d-block li '/></div>
            </div>
            
            <a href="#mycarousel" data-bs-slide="prev" className="carousel-control-prev"><span
                    className="carousel-control-prev-icon bg-danger"></span></a>
            <a href="#mycarousel" data-bs-slide="next" className="carousel-control-next"><span
                    className="carousel-control-next-icon bg-danger"></span></a>
        </div>
    </div>
</section>
  )
}

export default Carousel