import React from "react";
import { useState } from "react";

export const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[invalidInputError, setInvalidInputError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log(newUser)
    }

    const handleName = (e) => {
        console.log(e)
    }
    


    const handleFirstNameError = (e) => {

    }

    const handleLastNameError = (e) => {

    }

    const handleEmailError = (e) => {

    }

    const handlePasswordError = (e) => {

    }

    const handlePasswordConfirmationError = (e) => {

    }


    return (
        <div>
            <div className="user-form">
                <form onSubmit={ createUser }>
                    <div>
                        {/* <label>First Name: </label>
                        <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={ firstName } /> */}
                        <label>First Name: </label>
                        <input type="text" className="firstName" onChange={ (e) => handleName(e.target.className)}/>
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }/>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" onChange={ (e) => setEmail(e.target.value)} value={ email }/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text" onChange={ (e) => setPassword(e.target.value)} value={ password }/>
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)} value={ confirmPassword }/>
                    </div>
                    <button type="submit">yo</button>
                </form>
            </div>
            <div className="user-data">
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPassword }</p>
            </div>  
        </div>
    )
}

export default UserForm;