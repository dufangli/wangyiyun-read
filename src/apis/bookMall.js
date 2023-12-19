import axios from "axios"
export const getNav = async () => {
    let { data } = await axios.get(`https://apis.netstart.cn/yunyuedu/store/navi.json?gender=1`)
    
    return data
}
export const getSwipe = async (url) => {
    console.log(url);
    let { data } = await axios.get(`https://apis.netstart.cn/yunyuedu${url}`)
    
    return data
}