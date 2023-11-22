import Cart from "./cart"

function CartPage(props){
//     const [cartItem,props.setCartItems] = useState([])

//    useEffect(()=>{
//     const data = getCartFromLocalStorage()
//     props.setCartItems(data)
//    },[])
    const cartItem = props.cartItems

   const del_cart = cart=>{
    let data = [...cartItem]
    data = data.filter(e=>{return e !== cart})
    props.setCartItems(data)
    
   }

   const mng_qty=(cart,option)=>{
    const data = [...cartItem]
    const index = data.indexOf(cart)

    if(option === "add"){
        cart.qty = cart.qty + 1
    }else{
        cart.qty = cart.qty - 1
    }

    data[index] = cart
    props.setCartItems(data)
   }

    return(
        <>
            {cartItem.map(e=>(
                <Cart data={e} delete={del_cart} update={mng_qty}/>
            ))}
        </>
    )
}

export default CartPage