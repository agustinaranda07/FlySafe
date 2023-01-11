import React from 'react'
import "./services.css"

function services() {
  return (
    <section className='services-section'>
        <h1 style={{textAlign:"center", color:"#6305dd",fontSize:"50px",marginTop:"20px"}}>Conoce nuestros servicios adicionales</h1>
        <div className='info'>
        <div className='info-services'>
          <img src="../imgs/doctor.svg" alt="..." className='img-service' />
          <p className='title-service'>Seguro médico a bordo</p>
        </div>

        <div className='info-services'>
          <img src="../imgs/bus.svg" alt="..." className='img-service' />
          <p className='title-service'>Transportes privados <span style={{color:"#6305dd"}}>FlySafe</span></p>
        </div>

        <div className='info-services'>
          <img src="../imgs/receptionist.svg" alt="..." className='img-service' />
          <p className='title-service'>Hoteles exclusivos</p>
        </div>
        </div>
    </section>
  )
}

export default services