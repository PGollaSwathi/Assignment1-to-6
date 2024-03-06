import { CDN_URL } from "../utilities/constant"
import { useState } from "react"
import { addItem,removeParticularItem} from "../utilities/cartSlice"
import { useDispatch, useSelector } from "react-redux"
const CartItems = ({Item}) =>{    
    
    let getItem = useSelector((store)=>store.cart.item).reduce((acc , curr)=>{
    if(Item.card.info.id === curr.card.info.id){
    return acc = curr
    }
    else{
        return acc
    }
})
    //console.log(Item ,"item.................")
     const [count , setCount] = useState(getItem.qty) 
     const dispatch = useDispatch()
     console.log(getItem , "getItewm")
     const addClick = () => {
         setCount(count+1)
         dispatch(addItem({...Item , qty : 1}))
    }
    return(
        <div>
        <div>
        {
            <div key={Item?.card?.info?.id} className="flex justify-between border-b-2">
                    {/* <div>
                        {console.log(data)}
                    </div> */}
                    <div className="w-10/12">
                        {/* <label>    {data?.card?.info?.ribbon}</label> */}
                    <div className="text-left">
                    <span className="font-bold p-1 m-1">{Item?.card?.info?.name}</span>
                    <br/>
                    <span className="font-bold p-2 m-2"> - ₹{Item?.card?.info?.price/100 || Item?.card?.info?.defaultPrice /100}</span>
                    </div>
                    <div className="text-left p-1 m-1">
                        {Item?.card?.info?.description}
                    
                    </div> 
                    </div>
                 
                    <div className="relative w-[150]">
                        
                        <div>
                       {
                        
                         <div className="absolute w-[70] flex justify-between bg-white border border-gray-400 top-[80%] right-[35%] ">
                                 <button className=" text-green-400  px-2" 
                                  onClick={()=>{ 
                                    count === 1 ?  dispatch(removeParticularItem(Item)) : setCount(count - 1)   
                                }}>-</button>
                                 <p>{count}</p>
                                 <button className="text-green-400 px-2" onClick={addClick}>+</button>
                         </div>
                    
                       }    
                        <button className="border border-current bg-black text-white" onClick={()=>{
                            dispatch(removeParticularItem(Item))
                        }}>X</button>
                        <img className="z-0 w-[130]" src={CDN_URL + Item?.card?.info?.imageId}/>
                        </div>
                
                    </div>
                </div>
                
            }
        </div>
        </div>
    )
}

export default CartItems





