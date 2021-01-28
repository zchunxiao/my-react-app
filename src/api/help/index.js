import Axios from '@/service/axios'

// 检查登录状态
export function checkLoginState(data) {
    return  Axios("/user-customer-web/api/login/checkLoginState", data);
}

// 乐高接口
export function getLego(data){
    return Axios(`/ruban/api/lego/pageInfo?pageId=113040`,data,{method:"get"},true)
}
