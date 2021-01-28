import axios from 'axios';


const Axios = (url,params,options={},ignore=false)=>{
   return new Promise((resolve,reject)=>{
        axios({
            method: options.method || 'post',
            url: url,
            data:params
        }).then((res) => {
            console.log("resp:",res);
            const  { data:{errorCode,success,errorMsg,result},status} =  res;
            if(!ignore && status+"" !== "200"){
                console.log("接口请求出错了");
                return false;
            }

            
            if(!ignore && errorCode !== 0 && !success){
                console.log(`接口错误:${errorMsg}`)
                return false;
            }
            if(ignore){
                resolve(res);
            }else{
                resolve(result)
            }
           
        }, (err) => {
            console.log(err);
            reject(err)
        })
    })   
}

export default Axios
