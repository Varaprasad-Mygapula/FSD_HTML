import React,{useState} from "react";
function Practice(){
    // const [counter,setCounter]=useState(0);
    // const increment=()=>{
    //     if (counter<20) {
    //         setCounter(counter+1)   
    //     }  
    // }
    // const decrement=()=>{
    //     if (counter>0) {
    //         setCounter(counter-1)   
    //     }  
    // }
    // return(
    //     <>
    //     <h1>{counter}</h1>
    //     <button onClick={increment}>Increment</button>
    //     <button onClick={decrement}>Decrement</button>
    //     </>
    // )
    const [inputvalue,setInputValue]=useState('')
    return(<>
    <input placeholder="type something.." onChange={(e)=>{setInputValue(e.target.value)}}/>
    {inputvalue}

    </>)
}
export default Practice