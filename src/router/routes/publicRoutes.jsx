import { lazy } from 'react';

const Login = lazy(() => import('../../views/auth/Login'));
const Register = lazy(() => import('../../views/auth/Register'));
// const AdminLoginimport AdminLogin from './../../views/auth/AdminLogin';
const AdminLogin = lazy(()=> import('../../views/auth/AdminLogin'))

const publicRoutes =[
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/admin',
        element: <AdminLogin/>
    }
]

export default publicRoutes;