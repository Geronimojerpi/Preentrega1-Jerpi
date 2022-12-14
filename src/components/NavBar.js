import CartWidget from "./CartWidget";
import '../styles/estilos.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand titulo" to={`/`}>Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active subtitulos" aria-current="page" to={`/`}>INICIO</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active subtitulos" aria-current="page" to={`/category/hombres`}>HOMBRES</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active subtitulos" aria-current="page" to={`/category/mujeres`}>MUJERES</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <CartWidget/>
            </nav>
        </div>
    )
}




export default NavBar;
