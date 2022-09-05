import React, { useReducer } from 'react';

function reducer(state, action) {
    console.log("state is :" + state.firstName);
    console.log("action type is:" + action.type);
    console.log("action payload is:" + action.payload);

    let newState;
    newState = {...state, [action.type]: action.payload}
    return 
    
    // switch(action.type) {
    //     case "firstName":
    //         if (action.payload.length) {
    //             return {...state.firstName.error, [action.type]: action.payload}
    //         }
    // }
    return {
        ...state,
        [action.type]: action.payload
    };
}

export const UserForm = () => {

    const initialState = {
        firstName: {
            value: "asdfasdf",
            error: null
        },
        lastName: {
            value: "",
            error:null
        },
        email: {
            value: "",
            error: null
        }

    };

    const [state, dispatch] = useReducer(reducer, initialState)

    
    function handleChange(e) {
        const { name, value } = e.target;
        console.log("current error status is " + state.firstName.error);
        dispatch({
            type: name,
            payload: value
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
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        // value={state.email.value}
                        onChange={handleChange}
                    />
                </label>
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

// import React, { useReducer } from 'react';
 
// const initialState = {
//     name: '',
//     email: ''
// };
 
// function reducer(state, action) {
//     return {
//         ...state,
//         [action.type]: action.payload
//     };
// }
 
// export const UserForm = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);
 
//     function handleChange(e) {
//         const { name, value } = e.target;
//         dispatch({
//             type: name,
//             payload: value
//         });
//     }
 
//     return (
//         <div>
//             <div>
//                 <label>
//                     <span>Name:</span>{' '}
//                     <input
//                         name="name"
//                         value={state.name}
//                         onChange={handleChange}
//                     />
//                 </label>
//             </div>
//             <div>
//                 <label>
//                     <span>Email:</span>{' '}
//                     <input
//                         name="email"
//                         value={state.email}
//                         onChange={handleChange}
//                     />
//                 </label>
//             </div>
//             <p>{ state.email }</p>
//         </div>
//     );
// }

// export default UserForm;