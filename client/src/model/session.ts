import { reactive} from 'vue';
import { type Entry } from './tracker';


const session = reactive({
    currentUser: null as User | null,
})

interface User {
    name: string;
    profileID?: number;
    email?: string;
    password?: string;
    profilePicture?: string;
    pastEntrys?: Entry[];
}

export function useSession() {
    return session;
}

export function login() {
    session.currentUser = {
        name: 'john doe',
    }
}