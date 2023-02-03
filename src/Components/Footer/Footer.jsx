import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer>

      <div className='title' style={{paddingBottom:"20px"}}>
        <h1>FlySafe<i className="bi bi-airplane"></i></h1>
        <p className='slogan'>Conoce el mundo entero, conocelo con FlySafe</p>
      </div>

      <div className='rights-social' style={{borderTop:"1px solid white",paddingTop:"20px"}}>
          <li style={{display:"inline"}}><a href='/'><i className="bi bi-instagram"></i></a></li>
          <li style={{display:"inline"}}><a href='/'><i className="bi bi-twitter"></i></a></li>
          <li style={{display:"inline"}}><a href='/'><i className="bi bi-whatsapp"></i></a></li>
          <p style={{color:"white",display:"flex",justifyContent:"center",paddingTop:"10px"}}>© FlySafe All Rights Reserved</p>
      </div>

    </footer>
  )
}

export default Footer