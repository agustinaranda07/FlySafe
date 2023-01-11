import React from 'react'
import { useState } from 'react'
import "./itemdetail.css"

function ItemDetail({title,imgurl,date,price,description}) {
  const [count,setCount] = useState(0)

  function suma (){
    setCount(count +1)
  }

  function resta(){
    setCount(count -1)
    }

  return (
    <div className="detail">
      
      <div className="detail-img">
        <img src={imgurl} alt={title} />
      </div>

      <div className='detail-description'>
        <h2 style={{color:"#6305dd"}}>{title}</h2>
        <div className='detail-price'>
            <p>{description}</p>
            <small>{date}</small>
            <h3 className="item-card_price">${price}</h3>
        </div>

        <div style={{display:"flex",margin:"0 auto",justifyContent:"center",padding:"20px 0",border:"1px solid #6305dd",width:"50%",borderRadius:"5px"}}>
          <button onClick={resta} style={{width:"25%",margin:"5px",borderRadius:"5px",border:"none",color:"#f4f4f4",backgroundColor:"#6305dd"}}>-</button>
          <p style={{padding:"0 20px"}}><b>{count}</b></p>
          <button onClick={suma} style={{width:"25%",margin:"5px",borderRadius:"5px",border:"none",color:"#f4f4f4",backgroundColor:"#6305dd"}}>+</button>
        </div>
        <button style={{marginTop:"15px",width:"50%"}} className='btn'>Agregar al carrito</button>
      </div>
    </div>
    
  )
}

export default ItemDetail