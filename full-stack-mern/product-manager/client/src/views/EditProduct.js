import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { updateProductById } from "../services/internalApiService";
import { getProductById } from "../services/internalApiService";

export const EditProduct = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setTitle(data.title);
                setPrice(data.price);
                setDescription(data.description);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [id]);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        console.log("yo");

        const editedProduct = {
            title,
            price,
            description
        }

        updateProductById(id, editedProduct)
            .then((updatedProduct) => {
                navigate(`/products/${id}`)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div className="w-50 p-4 rounded mx-auto shadow">
            <form onSubmit={ (e) => handleUpdateSubmit(e)}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input type="text" onChange={ (e) => {
                        setTitle(e.target.value)
                    } } className="form-control" value={title}/>
                </div>

                <div className="form-group">
                    <label className="h6">Price</label>
                    <input type="number" onChange={ (e) => {
                        setPrice(e.target.value)
                    } } className="form-control" value={price}/>
                </div>

                <div className="form-group">
                    <label className="h6">Description</label>
                    <input type="text" onChange={ (e) => {
                        setDescription(e.target.value)
                    } } className="form-control" value={description}/>
                </div>
                <button className="btn btn-sm btn-outline-success mt-3">Update</button>
            </form>
        </div>
    );

}

export default EditProduct;
