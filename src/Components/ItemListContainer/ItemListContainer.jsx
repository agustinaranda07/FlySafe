import "./itemlist.css"
import React, {useState, useEffect} from "react";
import obtenerProductos, { obtenerCiudadPorCategoria } from "../../services/mock"
import Item from "./Item";
import { useParams } from "react-router-dom";


function ItemListContainer (props){

    const [cities,setCities] = useState([])
    let {id} = useParams()

    useEffect(() => {
      if (!id){
      obtenerProductos()
      .then((respuesta) => { 
        setCities(respuesta);
      })
      .catch((error) => alert(error))
    }
    else{
      obtenerCiudadPorCategoria(id)
      .then((respuesta) => { 
        setCities(respuesta);
      })
      .catch((error) => alert(error))
    }
  }, [id])

    return(
        <div className="wrapper-list next-fly">
          <h1 style={{color:"#6305dd",fontSize:"55px",margin:"25px 0"}}>Reserva ahora tu próximo vuelo</h1>
          <div className="next-fly">
            {cities.map((item) => {
              return(
                <Item key={item.id} item={item}/>
              )
            })}
          </div>
        </div>

    )
}

export default ItemListContainer;



// const [counter, setCounter] = useState(0);
// function rest(){
//     setCounter(counter -1)
// }

// function plus(){
//     setCounter(counter +1);
// }