//import Axios from '@/service/axios'
import Fetch from '@/service/fetch'
// 检查登录状态
export function checkLoginState(data) {
    return Fetch("/user-customer-web/api/login/checkLoginState", data);
}

// 乐高接口
export function getLego(data){
    return Fetch(`/ruban/api/lego/pageInfo?pageId=113040`,data,{method:"get"},true)
}
