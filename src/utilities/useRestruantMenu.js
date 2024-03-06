import { useEffect , useState } from "react"
const useRestruantMenu = (resId) => {
    const [resMenu , setResMenu] = useState(null)
    // const [filterBtn , setfilterBtn] = useState("veg")
    const [fill , setFill] = useState([])
    const [fills , setFills] = useState([])

    useEffect(()=>{
        fetchMenu()
    },[])

     const fetchMenu = async () => {
        try{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId)
        const json = await data.json()

        console.log(json)
        setResMenu(json?.data)
        setFill(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)        
        setFills(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }
        catch(e){
            console.log(e,"error")
        }
     }
    return [resMenu,fill,fills,setFills]
}

export default useRestruantMenu