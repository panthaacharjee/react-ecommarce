import React from 'react'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { setProduct } from '../Redux/Action/ProductAction'

const FavouriteProduct = ({val}) => {
    const productLink = `/product/${val.title}`
    const dispatch = useDispatch()
    return (
        <div className="col-md-3 product" onClick={()=>dispatch(setProduct(val))}>
            <Link to={productLink} >
                <img className="product-img" src={val.image} alt={val.image}/>
                <h4>{val.title}</h4>
                <h5>${val.price}</h5>
            </Link>
        </div>
    )
}

export default FavouriteProduct
