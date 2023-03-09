export const API_ROOT = import.meta.env.API_ROOT || 'http://localhost:3000/api/v1/';
console.log("env: " + import.meta.env.API_ROOT)
console.log("API_ROOT: " + API_ROOT)

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