import "./itemlist.css"
import roma from "../imgs/roma.jpg"
import paris from "../imgs/paris.jpg"
import ny from "../imgs/ny.jpg"
import React, {useState} from "react";


function ItemListContainer (props){

    const stock = 15;

    const [counter, setCounter] = useState(0);
    function rest(){
        setCounter(counter -1)
    }

    function plus(){
        setCounter(counter +1);
    }

    return(
        <div className="wrapper-list">
            <h1 className="title">Reservá ahora</h1>
            <div className="next-fly">
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

            <div>
                <div class="card" style={{width: "20rem"}}>
                    <img src={ny} class="card-img-top" alt="..."/>
                    <div class="card-body" style={{textAlign:"center"}}>
                        <h2 class="card-title">Nueva York</h2>
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

            <div>
                <div class="card" style={{width: "20rem"}}>
                    <img src={roma} class="card-img-top" alt="..."/>
                    <div class="card-body" style={{textAlign:"center"}}>
                        <h2 class="card-title">Roma</h2>
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
            </div>
        </div>
    )
}

export default ItemListContainer;