import {api} from './session';

const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

export async function getServerTime() {
    return api<string>('time/', {}, 'PATCH');
}

export function getWeekNo(date: Date): number {
    return Math.min(52, Math.ceil(getDayNo(date) / 7))

    //const janFirst = new Date(date.getFullYear(), 0, 1);
    //return Math.ceil((((date.getTime() - janFirst.getTime()) / 86400000) + janFirst.getDay() + 1) / 7);
}

export function getDayNo(date: Date): number {
    var month = date.getMonth();
    var dayOfYear = dayCount[month] + date.getDate();
    if( month > 1 && isLeapYear(date)) 
        dayOfYear++;
    return dayOfYear;
}

export function isLeapYear(date: Date): boolean {
    var year = date.getFullYear();
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
}