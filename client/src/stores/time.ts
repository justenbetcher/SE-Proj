import {api} from './session';

export async function getServerTime() {
    return api<Time>('time/', {}, 'PATCH');
}

export interface Time {
    year: number
    month: number
    day: number
    hour: number
    minute: number
    second: number
    weekday: number
}

export function compareTime(t0: Time, t1: Time): number {
    if (t1.year == t0.year) {
        if (t1.month == t0.month) {
            if (t1.day == t0.day) {
                if (t1.hour == t0.hour) {
                    if (t1.minute == t0.minute) {
                        return t1.second - t0.second
                    } else {
                        return t1.minute - t0.minute
                    }
                } else {
                    return t1.hour - t0.hour
                }
            } else {
                return t1.day - t0.day
            }
        } else {
            return t1.month - t0.month
        }
    } else {
        return t1.year - t0.year
    }
}

export function timeToDate(time: Time) {
    let month = time.month
    let day = time.day

    let monthString = '' + month;
    let dayString = '' + day;

    if (month < 10)
        monthString = '0' + month;
    if (day < 10)
        dayString = '0' + day;

    return new Date(time.year+'-'+monthString+'-'+dayString+'T00:00:00.000Z')
}

export function getWeekNum(time: Time) {
    const janFirst = new Date(time.year, 0, 1);
    const timeDate = timeToDate(time)
    return Math.ceil((((timeDate.getTime() - janFirst.getTime()) / 86400000) + janFirst.getDay() + 1) / 7);
}