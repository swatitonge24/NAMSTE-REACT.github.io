import ItemList from "./ItemList";
import { clearCart} from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Cart =()=>{

    const cartItems =useSelector((store)=>store.cart.items);
console.log(cartItems);
const dispatch= useDispatch();

const handleClearCart =()=>{
    dispatch(clearCart());

}

    return(
    <div className="text-center m-5 p-5">
    <h1 className="text-2xl font-bold">Cart</h1>
    <div className="w-6/12 m-auto">
    <button className="p-2 m-2 bg-black text-white text-right rounded-lg"
    onClick={handleClearCart}
    >Clear Cart</button>
    {cartItems.length==0 && <h1 className="font-semibold p-2"> Your Cart is empty. Add Items to the cart</h1>}
    <div>
        <ItemList items={cartItems}/>
    </div>
    </div>
    </div>
    )
}
export default Cart;