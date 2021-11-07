import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setLogged } from '../Redux/Action/ProductAction';
import { useHistory } from 'react-router';

const Register = () => {
    const {handleSubmit, register, formState:{errors}} = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmit = (data)=>{
        dispatch(setLogged(data));
        history.push("/");
    }
    return (
        <form >
            <div className="container ">
                <div className="row form">
                   <div className="col-md-6 form-label">
                        <div className="form-group">
                                <label>Full Name : </label>
                                <input 
                                    type="name" 
                                    className="form-control" 
                                    placeholder="Enter your full name"
                                    name="fullname"
                                    {
                                        ...register("fullname",{
                                            required: {
                                                value : true,
                                                message : "This field is required"
                                            },
                                            minLength: {
                                                value :  5,
                                                message : "Please Enter a valid name"
                                            }
                                        })
                                        
                                    }
                                />
                                {errors.fullname && <p style={{color:"red",}}>{errors.fullname.message}</p>}
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter your email"
                                    name="email"
                                    {
                                        ...register("email",{
                                            required: {
                                                value : true,
                                                message : "This field is required"
                                            },
                                            pattern: {
                                                value : /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                                                message : "Please Enter a valid email"
                                            }
                                        })
                                        
                                    }
                                />
                                {errors.email && <p style={{color:"red",}}>{errors.email.message}</p>}
                            </div>
                            <div className="form-group">
                                <label>Password : </label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Enter your password"
                                    name = "password"
                                    {
                                        ...register("password",{
                                            required: {
                                                value : true,
                                                message : "This field is required"
                                            },
                                            minLength : {
                                                value : 8,
                                                message : "Please enter 8 digit"
                                            }
                                        })
                                        
                                    }
                                />
                                {errors.password && <p style={{color:"red",}}>{errors.password.message}</p>}
                            </div>
                            <button type="submit" onClick={handleSubmit(onSubmit)} className="btn btn-primary">Register</button>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default Register
