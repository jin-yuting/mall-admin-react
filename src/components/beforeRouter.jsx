import { useLocation, Navigate } from "react-router";

function BeforeRouter({children}){
  const {pathname} = useLocation();
  if (pathname ==='/login') { return children }
  // 不存在token 返回重定向路由
  const token = localStorage.getItem('token');
  if(!token){
    return <Navigate to='/login'/>
  }
  return children
}
export default BeforeRouter;