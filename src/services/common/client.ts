import { API_HOST } from '../../config/constants';

function queryParams(data: { [key: string]: any }) {
    if (!data) {
        return '';
    }
    return Object.keys(data)
        .filter(k => !!data[k])
        .map(k => {
            const paramValue = data[k];
            return encodeURIComponent(k) + '=' + encodeURIComponent(paramValue)
        })
        .join('&');
}

export interface requestConfig {
    url: string,
    method: 'post' | 'get',
    data?: object,
}


export async function request<TResult = any>(config: requestConfig): Promise<TResult> {
    try {

    } catch (error) {
        throw new ApiError(error);
    }
}

