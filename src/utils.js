export const getCartFromLocalStorage=()=>{
    const data = localStorage.getItem('cart')
    if(data){
      return JSON.parse(data)
    }
    return []
  }
  

export const saveCart = (data) =>{
    console.log("saving ",data);
    let src = JSON.stringify(data)
  
    localStorage.setItem('cart',src)
  }
  
export const addToCart=(cartData)=>{
    const data = getCartFromLocalStorage()

    const cart = {
        name:cartData.name,
        qty:1,
        price:cartData.price,
        category:cartData.category,
        id:data.length + 1
    }

    if(!data.includes(cart)){
        data.push(cart)
        saveCart(data)
        alert("Product added to cart")
    }
}