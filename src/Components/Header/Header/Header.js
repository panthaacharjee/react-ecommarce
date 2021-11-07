import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const Header = () => {
    const logged = useSelector(state=>state.isLogged);
    return (
            <div className="header">
                <div className="container">
                    <div className="row section">
                        <div className="col-md-2">
                            <Link to="/" className="logo"><i className="fab fa-reddit"></i></Link>
                        </div>
                        <div className="col-md-8 ">
                        <form className="srch-btn">
                            <input type="text" placeholder="Search.." name="search"/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                        </div>
                        <div className="col-md-2">
                                {logged ? <Link to="/add-to-cart" className="cart-btn"><i className="fas fa-shopping-cart">Cart</i></Link> : <Link to="/register" className="register-btn">Register</Link>}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header
