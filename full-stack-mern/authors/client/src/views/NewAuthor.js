import { useState } from "react";
import { createAuthor } from "../services/internalApiService";
import { useNavigate } from "react-router-dom";

export const NewAuthor = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const authorData = {
            name
        }


        createAuthor(authorData)
            .then((data) => {
                console.log('new destination data:', data);
                navigate("/authors");
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
                    <label className="h6">Name: </label>
                    {errors?.name && (
                        <span style={{ color: 'red' }}>
                        {' '}
                        {errors?.name?.message}
                        </span>
                    )}
                    <input type="text" onChange={ (e) => {
                        setName(e.target.value)
                    } } className="form-control"/>
                </div>
                <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
            </form>
        </div>
    );
}

export default NewAuthor;