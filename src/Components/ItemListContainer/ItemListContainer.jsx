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
        img: "../imgs/bangkok.jpg",
        first_name: "Bangkok",
        date: "26/7/2023",
        stock: 28,
        price: 525.72
      }, {
        id: 2,
        img: "../imgs/dubai.jpg",
        first_name: "Dubai",
        date: "7/7/2023",
        stock: 63,
        price: 777.52
      }, {
        id: 3,
        img: "../imgs/estambul.jpg",
        first_name: "Estambul",
        date: "26/10/2023",
        stock: 13,
        price: 917.94
      }, {
        id: 4,
        img: "../imgs/hongkong.jpg",
        first_name: "Hong Kong",
        date: "13/12/2023",
        stock: 99,
        price: 767.07
      }, {
        id: 5,
        img: "../imgs/london.jpg",
        first_name: "Londres",
        date: "31/7/2023",
        stock: 44,
        price: 923.25
      }, {
        id: 6,
        img: "../imgs/macao.jpg",
        first_name: "Macao",
        date: "25/7/2023",
        stock: 63,
        price: 694.71
      }, {
        id: 7,
        img: "../imgs/ny.jpg",
        first_name: "Nueva York",
        date: "2/8/2023",
        stock: 29,
        price: 876.77
      }, {
        id: 8,
        img: "../imgs/paris.jpg",
        first_name: "París",
        date: "6/11/2023",
        stock: 18,
        price: 741.02
      }, {
        id: 9,
        img: "../imgs/roma.jpg",
        first_name: "Roma",
        date: "17/1/2023",
        stock: 65,
        price: 805.19
      }, {
        id: 10,
        img: "../imgs/singapur.jpg",
        first_name: "Singapur",
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
                            <h2 className="card-title" style={{color:"#6305dd", paddingTop:"10px"}}>{city.first_name}</h2>
                            <p className="card-text"><b>{city.date}</b></p>
                            <p className="card-text">${city.price}</p>
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
