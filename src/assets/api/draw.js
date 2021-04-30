import { Axios } from "@/assets/axios/index.js";


// *登录
export function login(data) {
    return Axios.post(`api/oauth/token`, data);
}

// *抽奖
export function myDraw(data) {
  return Axios.post(`api/ad/rewardsAndPunishments`,data);
}


// *查看获奖名单
export function getDrawList(params) {
  return Axios.get(`api/ad/rewardsAndPunishments`,{params});
}

// *查看所有抽奖用户
export function getUserList(params) {
  return Axios.get(`api/ad/users`,{params});
}