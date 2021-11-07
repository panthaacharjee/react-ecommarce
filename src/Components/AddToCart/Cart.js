import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/Action/ProductAction';

const Cart = ({val}) => {
    const [number, setNumber]= useState(1);
    const dispatch = useDispatch();
    if(number<1){
        setNumber(1)
    }
    const increment =()=>{
        setNumber(number+1);
    }
    const decrement =()=>{
        setNumber(number-1);
    }
    return (
       
            <div className="col-md-12 cart-pro" >
                <i onClick={()=>dispatch(removeFromCart(val.id))} className="fas fa-times"></i>
                <div>
                    <img  src={val.image} alt={val.image}/>
                </div>
                <div>
                    <h4>{val.title}</h4>
                    <p>{val.category}</p>
                    <button onClick={decrement}>-</button> {number} <button onClick={increment}>+</button>
                </div>
            </div>
   
    )
}

export default Cart
