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
    method: 'post' | 'get' | 'put' | 'delete',
    data?: object,
}


export async function request<TResult = any>(config: requestConfig): Promise<TResult> {
    try {
        let url = `${API_HOST}${config.url}`
        url = config.method === 'get' ? `${url}?${queryParams(config.data)}` : url

        const response = await fetch(url, {
            method: config.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })

        if (response.status >= 400) {
            throw new Error(response.statusText);
        }

        return response.json() as Promise<TResult>

    } catch (error) {
        throw new Error(error);
    }
}

