import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { updateAuthorById } from "../services/internalApiService";
import { getAuthorById } from "../services/internalApiService";

export const EditAuthor = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                setName(data.name);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [id]);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        const editedAuthor = {
            name
        }

        updateAuthorById(id, editedAuthor)
            .then((updatedAuthor) => {
                navigate(`/authors/${id}`)
            })
            .catch((error) => {
                setErrors(error?.response?.data?.errors);
                console.log(error);
            })
    }

    return(
        <div className="w-50 p-4 rounded mx-auto shadow">
            <form onSubmit={ (e) => handleUpdateSubmit(e)}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    {errors?.name && (
                        <span style={{ color: 'red' }}>
                        {' '}
                        {errors?.name?.message}
                        </span>
                    )}
                    <input type="text" onChange={ (e) => {
                        setName(e.target.value)
                    } } className="form-control" value={name}/>
                </div>

                <button className="btn btn-sm btn-outline-success mt-3">Update</button>
            </form>
        </div>
    );

}

export default EditAuthor;
