import { ref } from 'vue';

const tracker = ref({
    entry: null as Entry | null,
})

export interface Entry {
    category: string;
    date: Date;
    entryID: string;
    totalPrice: number;
    items?: string[];
    itemPrices?: number[];
    description: string;
}

export function useTracker() {
    return tracker;
}

export function setEntry() {
    tracker.value.entry = {} as Entry;
}

export function toItemArray(x: string) {
    tracker.value.entry!.items = x.split(', ');
}

