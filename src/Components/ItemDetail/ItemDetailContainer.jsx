import React from 'react'
import { useState,useEffect } from 'react'
import { obtenerCiudad } from '../../services/mock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


function ItemDetailContainer() {

    const [ciudad,setCiudad] = useState([])

    let param = useParams();
    console.log(param)

    useEffect(() =>{
        obtenerCiudad(param.id)
        .then((response)=>{
            setCiudad(response)
        })
        .catch((error)=> alert(error))
    },[])

return (
    <div>
        <ItemDetail 
            title={ciudad.first_name}
            imgurl={ciudad.img}
            description={ciudad.description}
            date={ciudad.date}
            price={ciudad.price}
        />
    </div>
)
}

export default ItemDetailContainer