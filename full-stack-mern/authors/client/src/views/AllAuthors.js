import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteAuthorById, getAllAuthors } from "../services/internalApiService";

export const AllAuthors = (props) => {
    const [allAuthors, setAllAuthorss] = useState([]);

    useEffect(() => {
        getAllAuthors()
            .then((data) => {
                setAllAuthorss(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleDeleteClick = (id) => {
        console.log(id);
        deleteAuthorById(id)
            .then((deletedAuthors) => {
                const filteredAuthors = allAuthors.filter((allAuthors) => {
                    return allAuthors._id !== id // if returns true we keep the item
                });

                setAllAuthorss(filteredAuthors);
            })
    }

    return (
        <div className="w-50mx mx-auto text-center">
            <h2>Authors</h2>
            <Link to={`/authors/new`} className="btn btn-sm btn-outline-primary mx-1 mb-3">Add an Author</Link>
            {allAuthors.map((author) => {
                const {_id, name } = author;
                return (
                    <div key={_id} className="shadow mb-4 rounded border p-4">
                        <Link to={`/authors/${_id}`}>
                            <h4>{name}</h4>
                        </Link>
                        <Link to={`/authors/${_id}/edit`} className="btn btn-sm btn-outline-warning mx-1">Edit</Link>
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

export default AllAuthors;