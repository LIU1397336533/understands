 
export default router.beforeEach((to,from,next)=>{
    console.log(to,from.path)
    let arr=['/','/mine','/discover']
   if(arr.includes(to.path)){
       next()
       return
   }else{ 
   router.go(-1)
   }
  
  })