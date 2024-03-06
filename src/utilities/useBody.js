import { useState ,useEffect } from "react";
const useBody = () => {
    const [listOfData , setlistOfData] = useState([]);
    const [filterdOfData , setfilteredOfData] = useState([])
    const [searchText , setsearchText] = useState("")
    useEffect(()=>{
        fetchData()
      },[])
  
      const fetchData = async()=>{
          try{
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
          const json = await data.json()
         console.log(json)
         setlistOfData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setfilteredOfData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          }
          catch(e){
              console.log(e)
          }
      }

      return [listOfData , filterdOfData , searchText, setfilteredOfData , setlistOfData , setsearchText]

}

export default useBody