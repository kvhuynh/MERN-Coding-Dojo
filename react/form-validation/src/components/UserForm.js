import React, { useReducer } from 'react';



function reducer(state, action) {
    console.log("firstName state is :" + state.firstName.value);
    console.log("error is:" + state.firstName.error);
    console.log("lastName state is :" + state.lastName.value);
    console.log("email state is :" + state.email.value);

    console.log("action type is:" + action.type);
    console.log("action payload is:" + action.payload);
    
    return {
        ...state,
        [action.type]: action.payload
    };
}

export const UserForm = () => {

    const initialState = {
            firstName: {
                value: '',
                error: null
            },
            lastName: {
                value: '',
                error: null
            },
            email: {
                value: '',
                error: null
            }
        };
        

    const [state, dispatch] = useReducer(reducer, initialState)

    
    function handleChange(e) {
        const { name, value } = e.target;
        let error = null;
        if (name === "firstName") {
            if (value.length < 2 && value.length !== 0) {
                error = "first name must be greater than 2";
            }
        }

        if (name === "lastName") {
            if (value.length < 2 && value.length !== 0) {
                error = "last name must be greater than 2";
            }
        }

        if (name === "email") {
            if (value.length < 2 && value.length !== 0) {
                error = "invalid email";
            }
        }

        dispatch({
            type: name,
            payload: {value, error: error}
        });

    }

    return (
        <div>
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                    />
                </label>
                { state.firstName.error !== null && (<p>{ state.firstName.error }</p>) }
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                    />
                </label>
                { state.lastName.error !== null && (<p>{ state.lastName.error }</p>) }
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                </label>
                { state.email.error !== null && (<p>{ state.email.error }</p>) }
            </div>
            <div>
                <p>{state.firstName.value}</p>
                <p>{state.lastName.value}</p>
                <p>{state.email.value}</p>
            </div>
        </div>
    );
}

export default UserForm;
