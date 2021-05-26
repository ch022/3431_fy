/*
* ajax请求函数
* 返回值：promise对象（异步返回的数据是：responsse.git comdata）
* */
import axios from 'axios'
import keyboard from 'swiper/src/components/keyboard/keyboard'
export default  function ajax(url,data={},type='GTE') {
 return new promise(function (resolve,reject) {
  let promise
   if (type === 'GTE'){
     // 准备 url query 参数数据
     let dataStr = '' //数据拼接字符串
     Object.keys(data).forEach(key => {
       dataStr += key + '=' + data[key] + '&'
     })
     if (dataStr !== ''){
       dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
       url = url + '?' + dataStr
     }
   //发送get请求
     promise = axios.get(url)
   }else {
     //发送post请求
     promise = axios.post(url,data)
   }
   promise.then( function(response)  {
     //成功调用resolve（）
     resolve(response.data)
   }).catch(function (errnor) {
      //失败调用reject
     reject(error)
   })
 })
}
