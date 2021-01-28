const baseUrl = 'https://trade.yizhitongapp.com';
const Fetch =  (url,data,options={
        method:"post",
        headers:{
             ContentType:'application/json'
            }
        }
      )=>{
       return  new Promise((resolve, reject) =>{
            fetch(`${baseUrl}${url}`,{
                method: options.method,
                headers: {
                    'content-type':  options.headers.ContentType
                },
                mode: 'cors', // 跨越
                body:JSON.stringify(data), // must match 'Content-Type' header // data can be `string` or {object}!
            }).then(response=>{
                return response.json();
            }).then(json=>{
                const {result,errorCode,success,errorMsg} = json;
                if(errorCode !==0 || !success){
                    console.log(`出错了${errorMsg}`)
                }
               resolve(result)
            }).catch(err=>{
               reject(err)
            })
        })
    // fetch(url,{
    //     method: options.method,
    //     headers: {
    //         'content-type':  options.headers.ContentType
    //     },
    //     mode: 'cors', // 跨越
    //     body:JSON.stringify(data), // must match 'Content-Type' header // data can be `string` or {object}!
    // })
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(myJson) {
    //   const {success,errorCode,errorMsg,result} =  myJson;
    //   if(errorCode !== 0){
    //       console.log(`出错了:${errorMsg}`)
    //   }
    //   if(!success) console.log("错误")
    // //   console.log("9999:",Promise.resolve(result));
    //    Promise.resolve(result);
    //   //return result
    // });
}

export default Fetch