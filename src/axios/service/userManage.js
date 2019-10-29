import {$get, $post, $delete} from '@/axios/base/';

/**
 * 用户管理
 * @param params
 */

 //用户管理列表
export function userShow(params) {
    return $post(`/auth-user/userShow/${params.pageNum}/${params.pageSize}`, params);
}

//启用 or 禁用
export function isStopUser(id,isStop) {
    return $get(`/auth-user/isStopUser/${id}/${isStop}`);
}

//新增用户
export function addOrEdit(params) {
    return $post('/auth-user/addOrEdit', params);
}

//删除
export function removeUser(id) {
    return $delete(`/auth-user/removeUser/${id}`);
}

//批量审核
export function examineUser(params) {
    return $post('/auth-user/examineUser', params);
}

