import { useState,useEffect } from "react" 
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import RestaurantCatagory from "./RestaurantCatagory"
const RestaurantMenu = () =>{
const [resMenu , setResMenu] = useState(null)
const { resId } = useParams()
const [showIndex , setShowIndex] = useState(null)
const [btn , setBtn] = useState("VEG")
const [fill , setFill] = useState([])
const [fills , setFills] = useState([])
    useEffect(()=>{
        fetchMenu()
    },[])
     const fetchMenu = async () => {
        try{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId)
            const json = await data.json()
            setResMenu(json?.data)
            console.log(json?.data , "okkokokoko")
            setFill(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards)
            setFills(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards)
    //   console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards.card.info.itemAttribute.vegClassifier , "love")
        }
    catch(e){
        console.log(e,"error")
    }
     }
  if (resMenu === null) return <Shimmer/>
     const { name , cuisines } = resMenu?.cards[0]?.card?.card?.info

         const catetories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>
      e?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
         )

    //     console.log(catetories ,"atekoog")
        //  const Handlebtn = () => {
        //     btn === "veg" ? setBtn("nonveg") :setBtn("veg") ;
        //     const filter = fill.filter((res)=>{
        //         return res.card.card.itemCards.card.info.itemAttribute.vegClassifier !== btn.toUpperCase() 

        //     })
        //     console.log(filter,"jiiyiu")
        //     setFills(filter)  
        //  }
        console.log(fill , "wdefgo")
    return(
        <div>
             <div>
                <div className="text-center">
                <h1 className="text-lg font-bold">{name}</h1>
                <h2>{cuisines}</h2>
                <button className="border bg-black text-white rounded-lg p-2" onClick={() => {
                   btn === "VEG" ? setBtn("NONVEG") :setBtn("VEG") ;
                  const filter = fill.filter((res)=>{
                    console.log(res , "o")
                   return (res.card.info.itemAttribute.vegClassifier !== btn) 
                    })
            console.log(filter,"filter")
            setFills(filter)  
         }}>{btn}</button>
                </div>
            
                <div>
                      {
                        catetories.map((c , index) => (<RestaurantCatagory key={c.card.card.title} data={c?.card?.card} 
                            showItem = {{index,showIndex}}
                                setShowIndex = {() => {
                                     return setShowIndex(index)
                                          }} 
                            />)
                        )
                      }
                </div>
             </div>
        </div>
    )
}

export default RestaurantMenu