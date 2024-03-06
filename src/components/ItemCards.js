
import { CDN_URL } from "../utilities/constant"
import { useState } from "react"
import { Link } from "react-router-dom"
import { addItem, removeItem } from "../utilities/cartSlice"
import { useDispatch } from "react-redux"
const ItemCards = ({Item}) =>{
    //console.log(Item ,"item.................")
    const [addBtn , setAddBtn] = useState(true)
    const [count , setCount] = useState(0)


  const dispatch = useDispatch()

    const HandleItem = () => {
            setAddBtn(false) 
            setCount(1)
            dispatch(addItem({...Item , qty : 1}))
    }

    const addClick = () => {
         setCount(count+1)
         dispatch(addItem({...Item , qty : 1}))
    }

    const removeClick = ()=> {
        dispatch(removeItem(Item))
        // dispatch(removeItem({...Item , qty : 1}))
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
                          addBtn ? <button className="absolute bg-green-300 border border-current px-2 top-[80%] right-[35%]"
                          onClick={() => HandleItem(Item)}>
                            ADD</button> :
                         <div className="absolute w-[70] flex justify-between bg-white border border-gray-400 top-[80%] right-[35%] ">
                                 <button className=" text-green-400  px-2" 
                                  onClick={()=>{ 
                                    count === 1 ?  setAddBtn(true) : setCount(count - 1)   
                                }}>-</button>
                                 <p>{count}</p>
                                 <button className="text-green-400 px-2" onClick={addClick}>+</button>
                         </div>
                    
                       }    
                        <button className="border border-current bg-black text-white" onClick={removeClick}>X</button>
                        <img className="z-0 w-[130]" src={CDN_URL + Item?.card?.info?.imageId}/>
                        </div>
                
                    </div>
                </div>
                
            }
        </div>
        </div>
    )
}



export const WithItem = (ItemCards) =>{
    return (props) => {
        // console.log(props ,"props")
        return (
            <div>
                    {/* <label>{props.data.aggregatedDiscountInfoV3.header}</label> */}
                    <label className="text-yellow m-1 p-1 rounded-lg ">bestseller</label>
                      <ItemCards {...props}/>
                      {/* <div>best</div> */}
            </div>
        
        )
    }
}

export default ItemCards





