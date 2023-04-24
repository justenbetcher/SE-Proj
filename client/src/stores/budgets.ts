export interface Budget {
    date: number
    weekNo: number
    income: Category[]
    spending: Category[]
}

export interface Category {
    description: string
    entries: Entry[]
}

export interface Entry {
    value: number
    description: string
    date: number
    weekly: boolean
}