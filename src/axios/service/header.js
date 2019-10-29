import {$get, $post} from '@/axios/base/';

/**
 * 修改密码
 * @param params
 */
export function editPwd(params) {
    return $post('auth-user/changePwd', params);
}
/**
 * 退出登录
 * @param params
 */
export function signOut() {
    return $get('signOut');
}