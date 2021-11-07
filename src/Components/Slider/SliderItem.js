import React from 'react'
import { Link } from 'react-router-dom'

const SliderItem = ({val}) => {
    

    return (
        <div className="col slider">
            <Link to={val.path}>
                <img style={{height: "350px", width:"100%"}} src={val.img} alt={val.img}/>
                <h3 >{val.title}</h3>
            </Link>
        </div>
    )
}

export default SliderItem
