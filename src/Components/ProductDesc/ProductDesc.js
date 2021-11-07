import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import StarRatings from 'react-star-ratings';
import { addToCart} from '../Redux/Action/ProductAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';

const ProductDesc = () => {
    const Product = useSelector(state=>state.product.payload);
    const logged =  useSelector(state=>state.isLogged);
    const dispatch = useDispatch();
    let history = useHistory();
    const cart=()=>{
       if(logged === false){
            history.push("/register");
       }else{
            dispatch(addToCart(Product)) 
            toast.success("Product successfully carted",{
                className: 'notification',
                position :"top-right"
            });
       }
    }
    return (
        <>
            <div className="container ">
                <div className="row product-desc">
                    <div className="col-md-5">
                        <img src={Product.image} alt={Product.image}/>
                    </div>
                    <div className="col-md-5">
                        <h2>{Product.title}</h2>
                        <StarRatings
                            rating={Product.rating.rate}
                            starRatedColor="#fdcc0d"
                            numberOfStars={5}
                            name='rating'
                            starDimension="30px"
                            starSpacing="4px"
                        />
                        <h4>${Product.price}</h4>
                        <p>{Product.description}</p>
                        <button style={{background:"orange"}} onClick={cart}>Add to Cart</button><span><button>Buy Now</button></span>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default ProductDesc
