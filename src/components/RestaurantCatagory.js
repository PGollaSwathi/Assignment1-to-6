import { useState } from "react"
import ItemCards ,{ WithItem }  from "./ItemCards"
const RestaurantCatagory = (props) =>{
    // const [showItem , setShowItem] =useState(false)
    const { data , showItem , setShowIndex}  = props
    const [show , setShow] = useState(false)
    const WithShowItem = WithItem(ItemCards)
    const HandleItems = () => {
        // setShowItem(!showItem)
        setShowIndex()
        setShow(!show)
                 }
    return(
        <div className="bg-slate-100 w-8/12 mx-auto">
            <div className="my-3 text-center flex justify-between cursor-pointer" onClick={HandleItems}>    
            <span className="font-bold">{data.title} ({data.title.length})
        
            </span>
            <span ><img className="w-5" src="https://icons.veryicon.com/png/o/internet--web/prejudice/up-arrow-5.png"/></span>
            </div>
            <div className="text-center">
                <div >{
                 (showItem.index === showItem.showIndex) && show &&
                  (data?.itemCards.map((res,index1)=>{
                    return  (res?.card?.info?.isBestseller ? <WithShowItem Item={res} key={index1}/> :  <ItemCards  Item={res} key={index1}/>)  })
                  )
                  } </div>
            </div>
                
        </div>
    )
}

export default RestaurantCatagory

