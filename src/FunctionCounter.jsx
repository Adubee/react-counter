import { useState } from "react";


function FunctionCounter() {
   const [count, setCount] = useState(0);
   return (
      <>
         <h1>{count}</h1>
         <button onClick={()=>setCount(count + 1)}>Increase</button>
         <button onClick={()=>setCount(count - 1)}>Decrease</button>
      </>
   )
}

export default FunctionCounter;

