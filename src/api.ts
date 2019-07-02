import http from './utils/http';
const getUserList=()=>{
  return http.get('/getUserList')
}
const register=(params:{name:string,password:string,phone:number,type:number})=>{
  return http.post('/register',params)
}
const login=(params:{password:string,phone:number})=>{
  return http.post('/login',params)
}
const logout=()=>{
  return http.post('/logout')
}
const userInfo=()=>{
  return http.post('/userInfo')
}
export {
  getUserList,
  register,
  login,
  logout,
  userInfo
}