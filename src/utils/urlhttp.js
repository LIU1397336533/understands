import axios from 'axios'
 
    //1.创建实例--配置
const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/353b3ff6ec4bb5e23761589b516b7615/api',
    timeout: 5000
})
 
//2.axios拦截器--request请求拦截(需求：拦截后修改配置信息)---
instance.interceptors.request.use(config => {
    // if(config.url=="/code"){
    //     alert(123)
    // }//若路径url为/code则alert，请求时立刻生效
    // console.log(config);//这里打印的是一些成功后的请求配置信息
    //request请求拦截(需求：拦截后修改配置信息,2.配置请求动画图标3.某些网络请求-登录携带token
    return config  //拦截后要返回，不然报错，接收不到数据
}, err => {
    console.log(err)
})

 //响应拦截
instance.interceptors.response.use(res => {
   return res //返回--不认别的地方拿不到这个数据
}, err => {
    console.log(err)
})

export function post (url,params=null) {
    return new Promise ((res,rej)=>{
          instance.post(url,params).then(p=>{
              res (p.data)
          }).catch(err=>{
              rej (err)
          })
    })
} 


export function get(url,params=null){
    return new Promise ((res,rej)=>{
        instance.get(url,
            {
                params:params
            }
            ).then(p=>{
            res (p.data)
        }).catch(err=>{
            rej (err)
        })
  })
}