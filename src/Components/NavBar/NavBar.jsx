import "./navbar.css"
import CartWidget from "../CartWidget";
import 'boxicons'

function NavBar (props){
    return(
        <header>
            <nav className="nav">
                <ul className="navList">
                    <li>
                        <a href="/"><h1 className="Title">FlySafe <i className="bi bi-airplane"></i></h1></a>
                    </li>
                    <li>
                        <a href="/">Productos</a>
                    </li>
                    <li>
                        <a href="/">Servicios adicionales</a>
                    </li>
                    <li>
                        <a href="/">Acerca de nosotros</a>
                    </li>
                    <li>
                        <a href="/">Contacto</a>
                    </li>
                    <li>
                        <a href="/"><CartWidget/></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
    
}

export default NavBar;