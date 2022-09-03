import React from "react";
import { useState } from "react";

export const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmPasswordError, setConfirmPasswordError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log(newUser)
    }

    const handleName = (targetValue, targetName) => {
        
        if (targetName === "firstName") {
            setFirstName(targetValue);
            if (targetValue.length < 2 && targetValue.length !== 0) {
                setFirstNameError("Last Name must be at least 2 characters");
            } else if (targetValue.length > 2 || targetValue.length === 0) {
                setFirstNameError("")
            }
        }

        if (targetName === "lastName") {
            setLastName(targetValue);
            if (targetValue.length < 2 && targetValue.length !== 0) {
                setLastNameError("Last Name must be at least 2 characters");
            } else if (targetValue.length > 2 || targetValue.length === 0) {
                setLastNameError("")
            }
        }

        if (targetName === "email") {
            setEmail(targetValue);
            if (targetValue.length < 2 && targetValue.length !== 0) {
                setEmailError("Email must be at least 5 characters");
            } else if (targetValue.length > 2 || targetValue.length === 0) {
                setEmailError("")
            }
        }

        if (targetName === "password") {
            setPassword(targetValue);
            if (targetValue.length < 2 && targetValue.length !== 0) {
                setPasswordError("Last Name must be at least 8 characters");
            } else if (targetValue.length > 2 || targetValue.length === 0) {
                setPasswordError("")
            }
        }

        if (targetName === "confirmPassword") {
            setConfirmPassword(targetValue)
            if (targetValue !== password) {
                setConfirmPasswordError("Passwords must match");
            } else if (targetValue === password || targetValue.length === 0) {
                setConfirmPasswordError("");
            }
        }
    }
    





    return (
        <div>
            <div className="user-form">
                <form onSubmit={ createUser }>
                    <div>
                        <label>First Name: </label>
                        <input type="text" name="firstName" onChange={ (e) => handleName(e.target.value, e.target.name)}/>

                        {
                            firstNameError ?
                            <p>{ firstNameError }</p> : ""
                        }

                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" name="lastName" onChange={ (e) => handleName(e.target.value, e.target.name)} value={ lastName }/>

                        {
                            lastNameError ?
                            <p>{ lastNameError }</p> : ""
                        }
                        
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" name="email" onChange={ (e) => handleName(e.target.value, e.target.name)} value={ email }/>

                        {
                            emailError ?
                            <p>{ emailError }</p> : ""
                        }

                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text" name ="password" onChange={ (e) => handleName(e.target.value, e.target.name)} value={ password }/>

                        {
                            passwordError ?
                            <p>{ passwordError }</p> : ""
                        }

                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="text" name="confirmPassword" onChange={ (e) => handleName(e.target.value, e.target.name)} value={ confirmPassword }/>

                        {
                            confirmPasswordError ?
                            <p>{ confirmPasswordError }</p> : ""
                        }

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


// 
// export const UserForm = (props) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const[password, setPassword] = useState("");
    // const[confirmPassword, setConfirmPassword] = useState("");
    // const[firstNameError, setFirstNameError] = useState("");
    // const[titleError, setTitleError] = useState("");
    // 
// 
    // const createUser = (e) => {
        // e.preventDefault();
        // const newUser = {firstName, lastName, email, password, confirmPassword};
        // console.log(newUser)
    // }
// 
    // const handleTitle = (e) => {
        // setFirstName(e.target.value);
        // if(e.target.value.length < 1) {
            // setTitleError("Title is required!");
        // } else if(e.target.value.length < 3) {
            // setTitleError("Title must be 3 characters or longer!");
        // } else {
            // setTitleError("");
        // }
    // }
    // 
    // {/* rest of component removed for brevity */}
    // 
    // return (
        // <div>
            {/* <div className="user-form"> */}
                {/* <form onSubmit={ createUser }> */}
                    {/* <div> */}
                        {/* {/* <label>First Name: </label> */}
                        // <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={ firstName } /> */}
                        {/* <label>First Name: </label> */}
                        {/* <input type="text" name="firstName" onChange={ handleTitle }/> */}
                        {/* { */}
                            // titleError ?
                            // <p>{ titleError }</p> : ""
                        // }
                    {/* </div> */}
                    {/* <div> */}
                        {/* <label>Last Name: </label> */}
                        {/* <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value)} value={ lastName }/> */}
                    {/* </div> */}
                    {/* <div> */}
                        {/* <label>Email: </label> */}
                        {/* <input type="text" name="email" onChange={ (e) => setEmail(e.target.value)} value={ email }/> */}
                    {/* </div> */}
                    {/* <div> */}
                        {/* <label>Password: </label> */}
                        {/* <input type="text" name ="password" onChange={ (e) => setPassword(e.target.value)} value={ password }/> */}
                    {/* </div> */}
                    {/* <div> */}
                        {/* <label>Confirm Password: </label> */}
                        {/* <input type="text" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value)} value={ confirmPassword }/> */}
                    {/* </div> */}
                    {/* <button type="submit">yo</button> */}
                {/* </form> */}
            {/* </div> */}
            {/* <div className="user-data"> */}
                {/* <p>First Name: { firstName }</p> */}
                {/* <p>Last Name: { lastName }</p> */}
                {/* <p>Email: { email }</p> */}
                {/* <p>Password: { password }</p> */}
                {/* <p>Confirm Password: { confirmPassword }</p> */}
            {/* </div>   */}
        {/* </div> */}
    // )
// }
// 
// export default UserForm;