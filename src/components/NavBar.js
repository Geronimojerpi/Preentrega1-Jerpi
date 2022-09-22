import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand titulo" href="#">Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active subtitulos" aria-current="page" href="#">Inicio</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active subtitulos" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item text-center" href="#">Producto 1</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a className="dropdown-item text-center" href="#">Producto 2</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a className="dropdown-item text-center" href="#">Producto 3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div> 
                <FontAwesomeIcon icon={faCartPlus} className="carrito"/>
            </nav>
        </div>
    )
}




export default NavBar;
