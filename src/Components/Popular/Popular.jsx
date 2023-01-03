import React from 'react'
import "./popular.css"

function Popular() {

    const popularCities = [
        {name: "París", off: "35% OFF", url:"../imgs/paris.jpg"},
        {name: "Nueva York", off: "35% OFF", url:"../imgs/ny.jpg"},
        {name: "Roma", off: "40% OFF", url:"../imgs/roma.jpg"}
    ]

  return (
    <div className='wrapper-popular'>
        <div>
            <h1 style={{color:"#6305dd",textAlign:"center",fontSize:"60px"}}>¡Promociones de año nuevo!</h1>
        </div>
        <div className='popular-section'>
            {popularCities.map((i) =>(
                <div>
                    <div class="card" style={{width: "20rem", marginBottom:"20px"}}>
                        <img src={i.url} class="card-img-top" alt="..."/>
                            <div className="card-body" style={{textAlign:"center"}}>
                                <h2 className="card-title">{i.name}</h2>
                                <p className="card-text"><b>{i.off}</b></p>
                                <a href="/" className="btn btn-primary btn-more">Ver más</a>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Popular;