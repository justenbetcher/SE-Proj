import {api} from './session';

export function addUser(username: string, password: string) {
    return api<User>(`users/${username}/${password}`, {}, 'POST')
}

export interface User {
    username: string
    password: string
}