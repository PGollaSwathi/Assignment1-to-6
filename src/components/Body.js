import { useEffect, useState ,useContext} from "react"
import ResturantCards , {withRestaurant} from "./ResturantCards"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import useBody from "../utilities/useBody";
import userContext from "../utilities/userContext";
const Body = () => {
    const [listOfData , setlistOfData] = useState([]);
    const [filterdOfData , setfilteredOfData] = useState([])
    const [searchText , setsearchText] = useState("")

    const ResturantCardsPomoted = withRestaurant(ResturantCards)

    useEffect(()=>{
      fetchData()
    },[])

    const fetchData = async()=>{
        try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

       setlistOfData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setfilteredOfData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch(e){
            console.log(e)
        }
    }

    //const [listOfData , filterdOfData , searchText , setfilteredOfData , setsearchText] = useBody()
    const onlineStatus = useOnlineStatus()

    if (onlineStatus === false ) {
        return <h1> error </h1>
    }

    const {loggedUser , setUserName} = useContext(userContext) 

    return( listOfData.length === 0 ? <Shimmer/> :
        <div>
            <div className="body-container">
            <div className="flex p-4 justify-around"> 
            <div>
            <input type="text" placeholder="type here" value={searchText} onChange={(e) => setsearchText(e.target.value)} className="border border-current p-1"/>
            <button className="border border-current p-1" onClick={()=>{
                const filtingData = listOfData.filter((res)=> (res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())))
                setfilteredOfData(filtingData)
            }} >click here</button>
         </div>
         <div>
            <button className="border border-current p-1" onClick={()=>{
                const filterdData = listOfData.filter((res)=> res.info.avgRating > 4.5)
                setfilteredOfData(filterdData)
            }}>top rated restaurants</button>
            </div>
            <div>
                <label>user : </label>
                <input type="text" className="border border-black p-1" value={loggedUser} onChange={(e)=> setUserName(e.target.value)}/>
            </div>
                </div>
         </div>
            <div className="flex flex-wrap">
                {
                    filterdOfData.map((res)=>(<Link className="link" key={res.info.id} to={"/restaurant/" + res.info.id}>
                        {res.info.promoted ? <ResturantCardsPomoted resData={res}/> : <ResturantCards resData={res}/>}
                        
                        </Link>))
                }
            
            </div>
        </div>
    )
}

export default Body

