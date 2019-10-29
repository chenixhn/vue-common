import {$get, $post} from '@/axios/base/';

export default {
    /**
     * 获取回放列表
     * @param params
     */
    listVideoInfo:(params) => {
        return $post(`/conference-video-info/listVideoInfo/${params.pageNum}/${params.pageSize}`, params.data);
    },

    /**
     * 编辑会议名称
     * @param params
     */
    editVideoInfo:(params) => {
        return $post(`/conference-video-info/editVideoInfo/${params.id}`, params.data);
    },

    /**
     * 删除会议
     * @param params
     */
    removeVideoInfo:(params) => {
        return $post(`/conference-video-info/removeVideoInfo/`, params);
    },
}

