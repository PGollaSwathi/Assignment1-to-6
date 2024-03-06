import { useDispatch, useSelector } from "react-redux"
import CartItems from "./CartItems"
import { clearItem } from "../utilities/cartSlice"

const Cart = () => {
    const cartItem = useSelector((store) => {
    return store.cart.item
})

const dispatch = useDispatch();
  const HandelClearItem = () => {
    dispatch(clearItem())
  }
    
    console.log(window.location.pathname , "window") 
    return(
        <div className="w-6/12 m-auto">
            <h1 className="text-2xl text-center">Cart</h1>
            <div className="text-center">
                <button className="border border-current bg-black
                 text-white rounded-lg p-2 text-center" 
                 onClick={HandelClearItem}>clearCart</button>
                 {cartItem.length === 0 && <h1>add cart items</h1>}
                {
                    cartItem.map((res,index) =>{
                        return <CartItems key={index} Item={res} path={window.location.pathname} />
                    })
                }
            </div>
        
        </div>
    )
}


export default Cart