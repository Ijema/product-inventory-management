import '../styles/cart.css'
import {DeleteOutlined} from '@ant-design/icons'
function Cart(props) {
    const {name,category,qty,price,image} = props.data

    return(
        <div id="all-cart">
            <div className="cart-container">

                <div className='cart-right'>
                    <div className='cart-img'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='cart-info'>
                        <div className='cart-info-big'>
                            {name}
                        </div>
                        <div className='cart-info-small'>
                           {category}
                        </div>
                    </div>
                </div>


                <div className='qty-container'>
                    <div class="qty-btn" onClick={()=>{props.update(props.data,"dec")}}>-</div>
                    <div className='qty-text'>{qty}</div>
                    <div className='qty-btn' onClick={()=>{props.update(props.data,"add")}}>+</div>
                </div>

                <div className='cart-grp'>
                    <div className='cart-price'>${price}</div>
                    <div className='qty-btn del' onClick={()=>{props.delete(props.data)}}><DeleteOutlined/></div>
                </div>
                
            </div>
        </div>
       
    )
}
export default Cart


