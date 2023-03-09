export const API_ROOT = import.meta.env.API_ROOT || 'http://localhost:3000/api/v1/';

export default function fetchV2<T>(url: string, data: any = null, method?: string): Promise<T> {
    const options: RequestInit = {
        method: method ?? (data ? 'POST' : 'GET'),
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
    };

    const p = fetch(API_ROOT + url, options).then( x=>x.json() )
    return p;
}