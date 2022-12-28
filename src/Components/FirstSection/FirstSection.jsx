import React from 'react'
import "./first.css"
import "bootstrap/dist/css/bootstrap.min.css";
import world from "../imgs/world.svg"
import payment from "../imgs/payment.svg"
import atention from "../imgs/atention.svg"

function FirstSection() {
  return (
    <section className='wrapper-first'>
      <h1 style={{textAlign:"center", color:"#6305dd",fontSize:"70px",marginTop:"20px"}}>Con FlySafe...</h1>
      <section className='first-section'>
      <div className='containers'>
        <img src={world} alt="..." className='img-first-section' />
        <h3 className='text-containers'>Vola a cualquier parte del mundo</h3>
      </div>
      <div className='containers'>
        <img src={payment} alt="..." className='img-first-section' />
        <h3 className='text-containers'>Accede a cientos de beneficios</h3>
      </div>
      <div className='containers'>
        <img src={atention} alt="..." className='img-first-section' />
        <h3 className='text-containers'>Recibi atención personalizada las 24hs</h3>
      </div>
      </section>
    </section>
  )
}

export default FirstSection;