import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {setProducts} from '../Redux/Action/ProductAction'
import Product from './Product'

const Products = () => {
    const [data, setData]=useState([]);
    const productList = useSelector(state=>state.products);
    const suffle=(a)=>{
        for(let i=a.length; i; i--){
            let j = Math.floor(Math.random()*i);
            [a[i-1], a[j]] = [a[j],a[i-1]];
        }
    }
    suffle(productList)
    const dispatch = useDispatch();

    useEffect(() => {

            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
            
        
    }, []);
    dispatch(setProducts(data))
    return (
        <div className="container">
            <div className="row">
                <h3 >Best Products</h3>
                <hr/>
                {
                    productList.map((val)=>{
                        return(<Product val={val} key={val.id}/>)
                    })
                }
               </div>
        </div>
    )
}

export default Products
