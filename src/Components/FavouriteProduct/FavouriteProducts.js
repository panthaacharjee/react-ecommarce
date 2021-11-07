import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FavouriteProduct from './FavouriteProduct';

const FavouriteProducts = () => {
    const FavouriteProducts = useSelector(state=>state.favProducts);
   
    /* Pagination */
    const [last, setLast] = useState(8)
    const  first8 = FavouriteProducts.slice(0, last);
    const pagination=()=>{
        setLast(last+4)
    }
    if(FavouriteProducts.length===0){
        return <>
            <div className="container">
                <div className="row">
                <h3 style={{marginTop:"50px"}}>Favourite Products</h3>
                <hr/>
                    <h4 style={{marginBottom:"50px"}}>Please Select Some Products</h4>
                </div>
            </div>
        </>
    }
    const buttonStyle = {
        height: "40px",
        margin: "30px auto",
        border: "none",
        borderRadius: "5px",
        background : "blue",
        color : "white",
        fontSize : "18px",
        fontFamily : "Roboto"
    }
    return (
        <div className="container">
            <div className="row">
                <h3 style={{marginTop:"50px"}}>Favourite Products</h3>
                <hr/>
                {first8.map((val, ind)=>{
                    return(
                        <FavouriteProduct val={val} key={ind}/>
                    )
                })}
                <div className="col-md-12">
                {}
                {(FavouriteProducts.length >= 9)? <button style={buttonStyle} onClick={pagination}>Load More</button> : ""}
                </div>
            </div>
        </div>
    )
}

export default FavouriteProducts
