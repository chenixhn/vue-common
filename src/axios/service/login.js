import {$get, $post} from '@/axios/base/';

/**
 * 登录
 * @param params
 */
export function login(params) {
    return $post('/authentication/form', params);
}