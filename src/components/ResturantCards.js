import { CDN_URL } from "../utilities/constant"
const ResturantCards = (props) => {  
    const {resData} = props
     const{name , avgRating , cloudinaryImageId ,cuisines}  = resData.info
   return(      
            <div className="border border-current bg-gray-100 w-[180] m-3 p-3 rounded-lg">
                <div>
                    <img className="w-[180] h-[130] rounded-lg" src={CDN_URL + cloudinaryImageId}/>
                </div>
                <h3 className="font-bold py-2">{name}</h3>
                <h4>{cuisines.join(" ,")}</h4>
                <h4>{avgRating}</h4>
                <h4>{resData.info.sla.deliveryTime} minutes</h4>
            </div>
   )
            }

export const withRestaurant = (ResturantCards) =>{
    return (props) =>{
        return (
            <div>
                    {/* <label>{props.data.aggregatedDiscountInfoV3.header}</label> */}
                    <label className="absolute bg-black text-white m-1 p-1 rounded-lg ">promoted</label>
                      <ResturantCards {...props}/>
            </div>
        
        )
    }
}

export default ResturantCards            