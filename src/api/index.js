// ./同级 ../上退一层
import ajax  from './ajax';
// 定义公告地址
const prefix = process.env.NODE_ENV === 'development' ? '' : 'http://localhost:5000';
// 定义发送请求模块,定义完模块以后要暴露出去，分别暴露export const ，和默认暴露export default+对象
 export const reqLogin =  (username,password)=>ajax(prefix + '/login',{username,password},'POST');
 // 请求添加用户函数
 //  export const reqAddUser = user => ajax('http://localhost:3000',user,'POST');