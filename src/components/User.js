import { useState } from "react"

const User = (props) =>{
   const [count ,setCount] =useState(0)
   const [count1] =useState(1)
    return(
        <div className="border border-current m-5">
                 <h2>count :{count}</h2>
                 <button onClick={()=>{
                    (cou = count +1)
                    setCount(cou)
                 }}>click</button>
                     <h2>count1 :{count1}</h2>
             <h2>name :{props.name}</h2>
             <h3>location : {props.location}</h3>
             <h3>contact : golla@okok</h3>
            </div>
    )
}
export default User