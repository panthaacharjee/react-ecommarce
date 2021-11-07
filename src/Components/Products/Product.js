import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setFavouiteProducts, setProduct } from '../Redux/Action/ProductAction'


const Product = ({val}) => {
    const productLink = `/product/${val.title}`
    const dispatch = useDispatch();
    const Product = ()=>{
        dispatch(setProduct(val))
        dispatch(setFavouiteProducts(val))
    }
    return (
        <div className="col-md-3 product" onClick={Product}>
            <Link to={productLink} >
                <img className="product-img" src={val.image} alt={val.image}/>
                <h4>{val.title}</h4>
                <h5>${val.price}</h5>
            </Link>
        </div>
    )
}

export default Product
