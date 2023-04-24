import session, {api, setUser} from './session';
import type { Budget } from './budgets';
import { getServerTime } from './time';

export function addUser(username: string, password: string) {
    return api<boolean>(`users/${username}/${password}`, {}, 'PATCH')
}

export function signIn(username: string, password: string) {
    return api<User>(`users/${username}`, {}, 'PATCH').then(user => {
        if (user && user.password === password) {
            return user;
        } else {
            return false;
        }
    })
}


export interface User {
    username: string
    password: string
    budgets: Budget[]
    lastActiveTime: number
    activeTime: number
    hasCurrentWeek: boolean
}