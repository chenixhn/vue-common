import {$get, $post} from '@/axios/base/';

/**
 * 注册用户
 * @param params
 */
export function register(params) {
    return $post('auth-user/register', params);
}