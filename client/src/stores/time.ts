import {api} from './session';

export async function getServerTime() {
    return api<Time>('time/', {}, 'PATCH');
}

export interface Time {
    year: number
    month: number
    day: number
    hour: number | null
    minute: number | null
    second: number | null
    weekday: number
  }