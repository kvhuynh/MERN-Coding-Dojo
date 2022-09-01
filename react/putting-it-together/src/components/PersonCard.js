import { Component } from 'react';

export class PersonCard extends Component {
    constructor(props) {
        super(props);
        
        const { firstName, lastName, age, hairColor } = this.props;

        this.state = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            hairColor: hairColor
        }
    }


    clickEvent = () => {
        /* 
        DO NOT MUTATE STATE DIRECTLY: this.state.count++
        
        pass in a newly created object.
        Mutating state directly bypasses reacts official way to update state
        and so can cause unintended side-effects.
        */
    
        let { age } = this.state;

        this.setState({ age: age += 1 });
      };


    render() {
        let { lastName, firstName, hairColor, age} = this.state;
        const { clickEvent } = this
        return(
            <div>
                <h1 >{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ clickEvent }>click me</button>
            </div>
        );
    }
}

export default PersonCard;


// import { Component } from 'react';

// // Named export which will be imported like:
// // import { Counter } from 'folder/file.js'
// export class PersonCard extends Component {
//   constructor(props) {
//     console.log(props);

//     /* 
//     props are passed in from the parent as 'attributes' on the component's
//     tag, just like 'id' attribute and others.
//     */
//     super(props);

//     const { start = 0 } = this.props;

//     this.state = {
//       count: start,
//       clickTimes: [],
//     };
//   }

//   handleClickCount = () => {
//     /* 
//     DO NOT MUTATE STATE DIRECTLY: this.state.count++
    
//     pass in a newly created object.

//     Mutating state directly bypasses reacts official way to update state
//     and so can cause unintended side-effects.
//     */

//     const { count, clickTimes } = this.state;
//     const { step = 1 } = this.props;

    
//     this.setState({
//       count: count + step,
//       // Don't .push because it mutates, make a copy & add new item to new array
//       clickTimes: [...clickTimes, new Date()],
//     });
//   };

//   render() {
//     const { props, state, handleClickCount } = this;
//     const { title } = props;
//     const { count, clickTimes } = state;

//     return (
//       <div
//         style={{
//           border: '1px solid black',
//           padding: '2rem',
//           marginBottom: '1rem',
//         }}
//       >
//         <h4>{title}</h4>
//         <button onClick={handleClickCount}>{count}</button>

//         <ul>
//           {clickTimes.map((date, i) => {
//             return <li key={i}>{date.toString()}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// // default export which will be imported like:
// // import WhateverYouWantToCallIt from 'folder/file.js'
// export default PersonCard;