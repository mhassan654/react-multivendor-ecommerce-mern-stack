import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(state)
    }
    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center'>
            <div className='items-center'>
                Image wil go here
            </div>
            <div className='w-[400px] text-white p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h1 className='text-center text-xl mb-3 font-bold'>Welcome to Ecommerce</h1>
                    <p className='text-sm mb-3 font-medium'> Please Login to your account</p>

                    <form onSubmit={submit}>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input type="text" id='email' onChange={inputHandler} value={state.email}
                                placeholder="email" name="email" className='px-3 py-2 outline-none border
                    border-slate-400 bg-white rounded-md text-black'  />
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor='password'>Password</label>
                            <input type="password" name="password" onChange={inputHandler} value={state.password} id='password'
                                placeholder="enter password" className='px-3 py-2 outline-none border
                    border-slate-400 bg-white text-black rounded-md'  />
                        </div>

                        <button className='bg-slate-800 w-full hover:shadow-blue-300/hover:shadow-lg
                         text-white rounded-md px-7 py-2 mb-3'>
                            Sign In</button>

                        <div className='flex items-center mb-3 gap-3 justify-center'>
                            <p>You Don't Have an account?
                                <Link className='font-bold' to={'/register'}>Sign Up</Link>
                            </p>
                        </div>

                        <div className='flex items-center mb-3 gap-3 justify-center'>
                            <div className='w-[45%] h-[1px] bg-slate-700'></div>
                            <div className='w-[10%] text-center justify-center'>
                                <span className='pb-1'>Or</span>
                            </div>
                            <div className='w-[45%] h-[1px] bg-slate-700'></div>
                        </div>

                        <div className='flex items-center mb-3 gap-3 justify-center'>
                            <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg
                      hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <span><FaGoogle className='w-6 h-6 text-white' /></span>

                            </div>

                            <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg
                      hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <span><FaFacebook className='w-6 h-6 text-white' /></span>
                            </div>


                        </div>


                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;