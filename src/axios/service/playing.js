import {$get, $post} from '@/axios/base/';

/**
 * 视频会议
 * @param 
 */
export function playConfig() {
    return $get('/conference-video-info/playConfig');
}