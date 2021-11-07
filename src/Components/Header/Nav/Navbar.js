import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
    let logged = useSelector(state=>state.isLogged);
    return (
       <div className="nav">
           <div className="container">
                <div className="row">
                    <div className="col-md-7 nav-menu">
                            <li><Link to="#" id="side-btn"><i className="fas fa-bars"></i></Link></li>
                            <li><Link to="#">Today's Deal</Link></li>
                            <li><Link to="#">Service</Link></li>
                            <li><Link to="#">Registry</Link></li>
                            <li><Link to="#">Gift Cards</Link></li>
                            {logged ? <li><Link to="/profile">Profile</Link></li> : ""}
                    </div>
                    <div className="col-md-5">
                        <li id="covid"><Link to="#" >Please response to COVID-19</Link></li>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Navbar


/*  */