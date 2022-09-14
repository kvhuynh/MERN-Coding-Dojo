import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteProductById, getAllProducts } from "../services/internalApiService";

export const AllProducts = (props) => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setAllProducts(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleDeleteClick = (id) => {
        console.log(id);
        deleteProductById(id)
            .then((deletedProduct) => {
                const filteredProducts = allProducts.filter((allProducts) => {
                    return allProducts._id !== id // if returns true we keep the item
                });

                setAllProducts(filteredProducts);
            })
    }

    return (
        <div className="w-50mx mx-auto text-center">
            <h2>Products</h2>
            <Link to={`/products/new`} className="btn btn-sm btn-outline-primary mx-1 mb-3">Add a product</Link>
            {allProducts.map((product) => {
                const {_id, title, price, description} = product;
                return (
                    <div key={_id} className="shadow mb-4 rounded border p-4">
                        <Link to={`/products/${_id}`}>
                            <h4>{title}</h4>
                        </Link>
                        <p>{price}</p>
                        <p>{description}</p>
                        <Link to={`/products/${_id}/edit`} className="btn btn-sm btn-outline-warning mx-1">Edit</Link>
                        <button onClick={(e) => {
                            handleDeleteClick(_id);
                        }} className="btn btn-sm btn-outline-danger mx-1">Delete</button>
                    </div>

                )
            })

            }
        </div>
    )
}

export default AllProducts;