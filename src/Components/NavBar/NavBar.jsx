import "./navbar.css"
import CartWidget from "../CartWidget";

function NavBar (props){
    return(
        <header>
            <h1 className="Title">
                AllSafe
            </h1>
            <nav className="nav">
                <ul className="navList">
                    <li>
                        <a href="/">Productos</a>
                    </li>
                    <li>
                        <a href="/">Servicios especiales</a>
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