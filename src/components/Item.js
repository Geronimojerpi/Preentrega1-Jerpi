import { Link } from "react-router-dom";

const Item = ({title, precio, img, id}) => {

    return (

        <div className="card" style={{width: 18 + "rem"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{precio}</p>
                <Link to={`/detail/${id}`} className="btn btn-primary">Detalles</Link>
            </div>
        </div>

    )
}

export default Item;