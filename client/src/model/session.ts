import { reactive} from 'vue';
import type { Entry }  from './tracker';


const session = reactive({
    currentUser: null as User | null,
})

interface User {
    name: string;
    profileID?: string;
    email?: string;
    password?: string;
    profilePicture?: string;
    pastEntrys?: Entry[];
    budget?:  Budget;
}

interface Budget {
    salaryOrHourly: boolean;
    salary?: number;
    variableIncome?: number; // for the people who arnt on a salary
    budgetPercentage?: number; // percentage of income people want to save

}

// sessoin methods
export function useSession() {
    return session;
}

export function login() {
    session.currentUser = {
        name: 'john doe',
    }
}

export function setUserId() {
    if (session.currentUser)
    {
        session.currentUser.profileID 
        = session.currentUser.name.replace(/ /g, '').toLowerCase();
    }
}

// budget methods

export function preSetBudget() {
    if(session.currentUser)
    {
        session.currentUser.budget = {} as Budget;
    }
}