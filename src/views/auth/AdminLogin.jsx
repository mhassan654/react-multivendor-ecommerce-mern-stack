import React, { useState } from 'react';

const AdminLogin = () => {
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
            {/* <div className='items-center'>
                Image wil go here
            </div> */}
            <div className='w-[400px] text-white p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    {/* <h1 className='text-center text-xl mb-3 font-bold'>Welcome to Ecommerce</h1> */}
                    <div className='items-center h-[70px] flex justify-center'>
                        <div className='w-[180px] h-[50px]'> 
                            <img src='http://localhost:5173/images/logo.png' />
                        </div>
                    </div>

                   

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
                            LOGIN</button>



                    </form>

                </div>
            </div>
        </div>
    );
};

export default AdminLogin;