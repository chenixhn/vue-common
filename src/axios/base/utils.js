import {Message} from 'element-ui';

/**
 * 失败toast
 * @param msg 提示消息
 */
export function successMsg(msg) {
    Message({
        showClose: true,
        message: msg || '操作成功',
        type: 'success'
    });
}

/**
 * 成功toast
 * @param msg 提示消息
 */
export function errorMsg(msg) {
    Message({
        showClose: true,
        message: msg || '操作失败',
        type: 'error'
    });
}

/**
 * 混合参数
 * @returns {object}
 */
export function extend() {
    const target = arguments[0] || {};
    let i = 1;
    const length = arguments.length;
    for (; i < length; i++) {
        for (const k of arguments[i]) {
            target[k] = arguments[i][k];
        }
    }
    return target;
}

/**
 * 拷贝简单对象
 * @param json
 * @returns {any}
 */
export function copy(json) {
    return JSON.parse(JSON.stringify(json));
}

/**
 * 跨域
 * @param options.url 请求链接
 * @param options.data 请求参数
 * @param options.success 请求
 * @param options.callback callback名称
 * @param options.success 回调
 */
function jsonp(options) {
    function _format(data) {
        let str = '';
        for (const key of data) {
            str += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
        }
        return str;
    }

    const url = options.url;
    const data = options.data;
    const oBody = document.getElementsByTagName('body')[0];
    const oScript = document.createElement('script');
    const callbackName = options.callback || `cb${Math.random().toString(36).substr(3)}`;

    window[callbackName] = function (result) {
        options.success(result);
    };
    data[options.callback] = callbackName;
    oScript.setAttribute('src', `${url}?${_format(data)}`);
    oBody.append(oScript);
}
