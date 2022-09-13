import { useEffect, useState } from "react";
import { createProduct } from "../services/internalApiService";

export const ProductEntryForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const productData = {
            title,
            price,
            description
        }

        console.log(productData);

        createProduct(productData)
            .then((data) => {
                console.log('new destination data:', data);
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            })

    }

    return(
        <div className="w-50 p-4 rounded mx-auto shadow">
            <form onSubmit={ (e) => handleSubmit(e)}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input type="text" onChange={ (e) => {
                        setTitle(e.target.value)
                    } } className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="h6">Price</label>
                    <input type="number" onChange={ (e) => {
                        setPrice(e.target.value)
                    } } className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="h6">Description</label>
                    <input type="text" onChange={ (e) => {
                        setDescription(e.target.value)
                    } } className="form-control"/>
                </div>
                <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
            </form>
        </div>
    );
}

export default ProductEntryForm;