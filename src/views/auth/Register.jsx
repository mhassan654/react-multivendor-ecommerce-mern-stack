import React from 'react';

const Register = () => {
    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center'>
            <div className='w-[350px] text-white p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h1 className='text-center text-xl mb-3 font-bold'>Welcome to Ecommerce</h1>
                    <p className='text-sm mb-3 font-medium'> Please Register your account</p>

                    <form>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor='name'>Name</label>
                            <input type="text" className='px-3 py-2 outline-none border
                        border-slate-400 bg-white rounded-md' />
                        </div>

                        {/* <input type="email" placeholder='Email' className='border p-2 mb-4 rounded' />
                        <input type="password" placeholder='Password' className='border p-2 mb-4 rounded' />
                        <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Register</button> */}
                    </form>

                </div>


            </div>
        </div>
    );
};

export default Register;