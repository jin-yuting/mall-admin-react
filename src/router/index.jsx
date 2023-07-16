import React,{lazy} from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import lazyLoad from './lazyLoad';
import Layout from '../Layout'
import Error from '../views/error'

const GetRouters = () =>{
  const routes = useRoutes([
    {
      path:'/',
      element: <Navigate to="/login"></Navigate>
    },
    {
      path:'/login',
      // element: <Login />,
      element: lazyLoad(lazy(() => import('../views/login'))),
      meta:{
        // 不需要权限
        unWantedAuth: true,
      }
    },
    {
      path: '/layout',
      element:<Layout />,
      children:[
        {
          // hidden: true,
          path:'home',
          element: lazyLoad(lazy(() => import('../views/home'))),
        },
        {
          path:'category',
          element: lazyLoad(lazy(() => import('../views/category'))),
        },
        {
          path:'guest',
          element: lazyLoad(lazy(() => import('../views/guest'))),
        },
      ]
    },
    {
      path:'/404',
      element: <Error />,
      meta:{
        // 不需要权限
        unWantedAuth: true,
      }
    },
  ])
  return routes
}

export default GetRouters;