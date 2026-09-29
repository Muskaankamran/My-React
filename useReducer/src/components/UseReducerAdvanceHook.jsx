import React from 'react'
import { useReducer } from 'react';
import { act } from 'react'
let initialData = {
    name: "", email: "", password: "", gender: ""
}
function reducer(data , action){
 console.log(data , action);
   return{...data,[action.type]:action.val}
 }
const UseReducerAdvanceHook = () => {
    const [state, dispatch] = useReducer(reducer, initialData)
    console.log(reducer, initialData);

    return (
        <div>
            <h1>Form</h1>
            <input type="text" placeholder='Enter name' onChange={(event) => dispatch({ type: name, val: event.target.value })} /> <br /> <br /> <br /> <br />
            <input type="text" placeholder='Enter email' onChange={(event) => dispatch({ type: email, val: event.target.value })} /><br /> <br /> <br /> <br />
            <input type="text" placeholder='Enter password' onChange={(event) => dispatch({ type: password, val: event.target.value })} /><br /> <br /> <br /> <br />
            <input type="text" placeholder='gender' onChange={(event) => dispatch({ type: gender, val: event.target.value })} /><br /> <br /> <br /> <br />
            <button>Add details</button>
         <h2>Preview you details</h2>
         <ul>
            <li>Name: {state.name}</li>
            <li>Email : {state.email}</li>
            <li>Password:{state.password}</li>

            <li>Gender: {state.gender}</li>
            
                    </ul>
        </div>
    )
}

export default UseReducerAdvanceHook
