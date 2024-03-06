import { useState , useContext } from "react"
import { LOGO_URL } from "../utilities/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utilities/useOnlineStatus"
import userContext from "../utilities/userContext"
import { Selector, useSelector } from "react-redux"

const Header = () => {
    const[logBtn , setlogBtn] = useState("login")
    const onlineStatus = useOnlineStatus()
 //we are suscribing the store using a selector
    const cart = useSelector((store) => store.cart.item)
    const data = useContext(userContext)
    return(
    <div className="flex justify-between border border-current shadow-xl bg-pink-100">
            <div className="logo">
                <img className="w-36" src={LOGO_URL}/>
            </div>
            <div className="flex item-center">
                <ul className="flex p-5 m-5">
                    <li className="px-2">online status:{onlineStatus ? "online" : "offline"}          </li>
                    <li className="px-2"><Link className="link-item" to={"/"}>Home</Link>             </li>       
                    <li className="px-2"><Link className="link-item" to={"/about"}>About Us</Link>    </li>
                    <li className="px-2"><Link className="link-item" to={"/contact"}>Contact Us</Link></li>
                    <li className="px-2"><Link className="link-item" to={"/grocery"}>Grocery</Link></li>
                    <li className="px-2"> <Link to={"/cart"}>Cart({cart.length} item)</Link></li>
                    <button className="border-current" onClick={()=>{
                        logBtn === "login" ? setlogBtn("logout") : setlogBtn("login")
                    }}>
                        <Link to="/login">{logBtn}</Link></button>
                        <li className="px-2">{data.loggedUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header