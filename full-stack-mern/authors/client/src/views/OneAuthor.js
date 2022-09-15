import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getAuthorById } from "../services/internalApiService";
import { deleteAuthorById } from "../services/internalApiService";

export const OneAuthor = (props) => {
    const [author, setAuthor] = useState([]);
    const { name } = author;
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("i am here");
        getAuthorById(id)
            .then((data) => {
                setAuthor(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteClick = () => {
        deleteAuthorById(id)
            .then((deletedAuthor) => {
                navigate(`/authors`)
            })
    }


    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4 mt-3">
            <p>{ name }</p>
            <Link to={`/authors`} className="btn btn-sm btn-outline-success">Back to Authors</Link>
            <button onClick={(e) => handleDeleteClick()} className="btn btn-sm btn-outline-danger">Delete</button>
        </div>
    );
}

export default OneAuthor;