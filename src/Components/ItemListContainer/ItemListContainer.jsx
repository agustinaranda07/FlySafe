import roma from "../imgs/roma.jpg"
import paris from "../imgs/paris.jpg"
import ny from "../imgs/ny.jpg"
import bangkok from "../imgs/bangkok.jpg"
import dubai from "../imgs/dubai.jpg"
import estambul from "../imgs/estambul.jpg"
import hongkong from "../imgs/hongkong.jpg"
import london from "../imgs/london.jpg"
import macao from "../imgs/macao.jpg"
import singapur from "../imgs/singapur.jpg"
import "./itemlist.css"
import React, {useState} from "react";


function ItemListContainer (props){

    const [counter, setCounter] = useState(0);
    function rest(){
        setCounter(counter -1)
    }

    function plus(){
        setCounter(counter +1);
    }

    const fly = [{
        id: 1,
        img: {roma},
        first_name: "Kaélé",
        date: "26/7/2023",
        stock: 28,
        price: 525.72
      }, {
        id: 2,
        img: {paris},
        first_name: "Sourotí",
        date: "7/7/2023",
        stock: 63,
        price: 777.52
      }, {
        id: 3,
        img: {ny},
        first_name: "Saint-Quentin",
        date: "26/10/2023",
        stock: 13,
        price: 917.94
      }, {
        id: 4,
        img: {bangkok},
        first_name: "Wamba",
        date: "13/12/2023",
        stock: 99,
        price: 767.07
      }, {
        id: 5,
        img: {dubai},
        first_name: "Rivière-du-Loup",
        date: "31/7/2023",
        stock: 44,
        price: 923.25
      }, {
        id: 6,
        img: {estambul},
        first_name: "Podbrdo",
        date: "25/7/2023",
        stock: 63,
        price: 694.71
      }, {
        id: 7,
        img: {hongkong},
        first_name: "Tariji",
        date: "2/8/2023",
        stock: 29,
        price: 876.77
      }, {
        id: 8,
        img: {london},
        first_name: "Guanghai",
        date: "6/11/2023",
        stock: 18,
        price: 741.02
      }, {
        id: 9,
        img: {macao},
        first_name: "Grenoble",
        date: "17/1/2023",
        stock: 65,
        price: 805.19
      }, {
        id: 10,
        img: {singapur},
        first_name: "Hanji",
        date: "10/7/2023",
        stock: 28,
        price: 538.56
      }]

    return(
        <div className="wrapper-list">
            <h1 className="title">Reservá ahora</h1>
            <div className="next-fly">
                {fly.map((city)=>
                    <div className="card" style={{width: "20rem", marginBottom:"20px"}}>
                        <div className="card-body" style={{textAlign:"center"}}>
                            <img src={city.img} className="card-img-top" alt="..."/>
                            <h2 className="card-title">{city.first_name}</h2>
                            <p className="card-text"><b>{city.date}</b></p>
                            <p className="card-text"><b>${city.price}</b></p>
                            <div className="count">
                                <button className="btn-count" disabled={counter === 0} onClick={rest}>-</button>
                                <p className="card-text count-number">{counter}</p>
                                <button className="btn-count" disabled={counter === city.stock} onClick={plus}>+</button>
                            </div>
                            <button type="button" className="btn btn-primary btn-lg">Agregar al carrito <i className="bi bi-cart2"></i></button>
                        </div>
                    </div>
                )
                }
            </div>
        </div>

    )
}

export default ItemListContainer;


/*{ <div className="next-fly">
<div>
    <div class="card" style={{width: "20rem"}}>
        <img src={paris} class="card-img-top" alt="..."/>
        <div class="card-body" style={{textAlign:"center"}}>
            <h2 class="card-title">París</h2>
            <p class="card-text"><b>Enero 2023</b></p>
            <div className="count">
                <button className="btn-count" disabled={counter === 0} onClick={rest}>-</button>
                <p class="card-text" className="count-number">{counter}</p>
                <button className="btn-count" disabled={counter === stock} onClick={plus}>+</button>
            </div>
            <button type="button" className="btn btn-primary btn-lg">Agregar al carrito <i className="bi bi-cart2"></i></button>
        </div>
    </div>
</div>
</div> }*/