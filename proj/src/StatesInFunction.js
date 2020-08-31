import React,{useState} from'react';
let StatesInFunction=(props)=>{
	let initialValue=0;
	 const [count,setCount]=useState(initialValue);
	return(
		<div>
		<h2>
		{count}
		</h2>
		<button onClick={()=>{setCount(count+1)}}>Increment</button>
		<button onClick={()=>{setCount(count-1)}}>Decrement</button>
		</div>
		<StatesInFunction name="patan" age="20"/>

		)
}
export default StatesInFunction;