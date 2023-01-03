import React from 'react'
import "./popular.css"

function Popular() {
  return (
    <div className='wrapper-popular'>
            <div>
                <h1 style={{color:"#6305dd",textAlign:"center",fontSize:"60px"}}>¡Promociones de fin de año!</h1>
            </div>
        <section className='popular-section'>
            <div>
                <div class="card" style={{width: "20rem"}}>
                    <img src="../imgs/paris.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body" style={{textAlign:"center"}}>
                        <h2 class="card-title">París</h2>
                        <p class="card-text"><b>35% OFF</b></p>
                        <a href="/" class="btn btn-primary" style={{backgroundColor:"#6305dd"}}>Ver más</a>
                    </div>
                </div>
            </div>

            <div>
                <div class="card" style={{width: "20rem"}}>
                    <img src="../imgs/ny.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body" style={{textAlign:"center"}}>
                        <h2 class="card-title">Nueva York</h2>
                        <p class="card-text"><b>35% OFF</b></p>
                        <a href="/" class="btn btn-primary" style={{backgroundColor:"#6305dd"}}>Ver más</a>
                    </div>
                </div>
            </div>

            <div>
                <div class="card" style={{width: "20rem"}}>
                    <img src="../imgs/roma.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body" style={{textAlign:"center"}}>
                        <h2 class="card-title">Roma</h2>
                        <p class="card-text"><b>40% OFF</b></p>
                        <a href="/" class="btn btn-primary" style={{backgroundColor:"#6305dd"}}>Ver más</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Popular;