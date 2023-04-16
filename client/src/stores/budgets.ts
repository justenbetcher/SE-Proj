import { compareTime, getWeekNum, type Time } from "./time";

export interface Budget {
    start: Time
    initialized: Time
    income: Category[]
    spending: Category[]
}

export interface Category {
    entries: Entry[]
}

export interface Entry {
    value: number
    description: string
    time: Time
    weekly: boolean
}

export function getLatestBudget(budgets: Budget[]): Budget {
    var latest: Budget = budgets[0];
    
    for (var i = 1; i < budgets.length; i++) {
        if (compareTime(budgets[i].start, latest.start) < 0) {
            latest = budgets[i];
        }
    }

    return latest
}

export function isBudgetCurrent(budget: Budget, now: Time) {
    return getWeekNum(budget.start) === getWeekNum(now);
}