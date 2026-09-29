import React from 'react'
import { useReducer } from 'react'

function reducer(count , action){
console.log(count , action);
if(action.type==="INCREMENT"){
   return count +1
}else if(action.type === "DECREMENT"){
    return count -1
}

}
const UseReducerHook = () => {
    const [state , dispatch] = useReducer(reducer , 0)
    console.log(useReducer(reducer , 0));
    
  return (
    <div>
      
    </div>
  )
}

export default UseReducerHook
