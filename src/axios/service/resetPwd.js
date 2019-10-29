import {$get, $post} from '@/axios/base/';

/**
 * 修改密码
 * @param params
 */
export function resetPwd(params) {
    return $post('auth-user/resetPwd', params);
}
/**
 * 获取验证码
 * @param params
 */
export function getYzm(num) {
    return $get(`system/verification-code/RESET_PASSWORD/${num}`);
}