// import { useReducer } from "react";

// export const UserForm = () => {

//     const initialState = {
//         firstName: {
//             value: "",
//             error: null
//         },
//         lastName: {
//             value: "",
//             error: null
//         },
//         email: {
//             value: "",
//             error: null
//         }
//     };

//     const [state, dispatch] = useReducer(reducer, initialState);

//     function reducer(state, action) {
//         console.log("i am here");
//         console.log();
//         console.log({...state});
//         return ({
//             ...state,
//             [action.type]: action.payload
//         });
//     }

//     function handleChange(e) {
//         const {name, value} = e.target;
//         console.log(name);
//         console.log(value);
//         dispatch({ type:name, payload: value })
//     }

//     return (
//         <div className="user-form">
//         <form>
//             <div>
//                 <label>First Name: </label>
//                 <input type="text" name="firstName" onChange={handleChange}/>


//             </div>
//             <div>
//                 <label>Last Name: </label>
//                 <input type="text" name="lastName" value={state.lastName} onChange={handleChange}/>
//             </div>
//             <div>
//                 <label>Email: </label>
//                 <input type="text" name="email" value={state.email} onChange={handleChange}/>
//             </div>
//             <button type="submit">yo</button>
//         </form>
//         <div>
//             <div className="user-data">
//                 <p>{state.firstName.value}</p>
//             </div>  
//         </div>
//     </div>
//     )
// }

// export default UserForm;

import React, { useReducer } from 'react';


export const UserForm = () => {
    const initialState = {
        name: '',
        email: ''
    };
    
    function reducer(state, action) {
        return {
            ...state,
            [action.type]: action.payload
        };
    }

    const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
 
    return (
        <div>
            <div>
                <label>
                    <span>Name:</span>{' '}
                    <input
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <p>{state.name}</p>
        </div>
    );
}

export default UserForm;