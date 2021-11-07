import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart';

const AddToCart = () => {
    const cart = useSelector(state=>state.cart);
    
    const Price = cart.reduce((total, prd)=>total+prd.price, 0).toFixed(2);
    let shipFee = "0.00"
    if(cart.length>=3){
        shipFee = "45.00"
    }else if(cart.length>=6){
        shipFee = "55.00"
    }else if(cart.length<3 && cart.length>0){
        shipFee="32.00"
    }
    let Total = (parseFloat(Price) + parseFloat(shipFee)).toFixed(2);

    const orderBtn={
        height: "40px",
        margin: "30px auto",
        border: "none",
        borderRadius: "5px",
        background : "rgb(162, 173, 9)",
        color : "white",
        fontSize : "18px",
        fontFamily : 'Roboto',
        padding: "10px 35px",
        boxShadow: "0px 0px 10px 1px rgb(61, 61, 61)"
    }
    return (
        <div className="container">
            <div className="row cart">
               <div className="col-md-7">
               {
                    cart.map((val, ind)=>{
                        return <Cart key={ind} val={val} />
                        
                    })
                }
               </div>
                <div className="col-md-4" style={{marginLeft:"40px"}}>
                    <h4>Order Summury</h4>
                    <h5>Subtotal : ${Price}</h5>
                    <h5>Shiping Fee : ${shipFee}</h5><hr/>
                    <h5>Total : ${Total}</h5>
                    <button style={orderBtn}>Buy Product</button>
                </div>
            </div>
        </div>
    )
}

export default AddToCart
