import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById } from "../services/internalApiService";
import { deleteProductById } from "../services/internalApiService";

export const OneProduct = (props) => {
    const [product, setProduct] = useState([]);
    const { title, price, description } = product;
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("i am here");
        getProductById(id)
            .then((data) => {
                setProduct(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteClick = () => {
        deleteProductById(id)
            .then((deletedProduct) => {
                navigate(`/products`)
            })
    }


    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4 mt-3">
            <p>{ title }</p>
            <p>{ price }</p>
            <p>{ description }</p>
            <Link to={`/products`} className="btn btn-sm btn-outline-success">Back to Products</Link>
            <button onClick={(e) => handleDeleteClick()} className="btn btn-sm btn-outline-danger">Delete</button>
        </div>
    );
}

export default OneProduct;