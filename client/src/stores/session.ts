//import router from "@/router";
import fetchV2 from "@/services/fetchV2";
import { reactive } from "vue";
import type { User } from "./users";
import { getServerTime, getWeekNo } from "./time";

export interface Message {
    text: string;
    type: "danger" | "warning" | "success" | "info";
}

const session = reactive({
    loading: 0,
    error: null as string | null,
    messages: [] as Message[],
    user: null as User | null
});

export function setUser(user: User, time: number) {

  user.budgets.sort( (b0, b1) => {
    return b1.weekNo - b0.weekNo;
  })  

  user.activeTime = time

  user.hasCurrentWeek = false
  const currentWeekNo = getWeekNo(new Date(time)) 

  if (user.budgets.length > 0 && currentWeekNo === user.budgets[0].weekNo) 
    user.hasCurrentWeek = true;
  

  session.user = user
}

export function setError(error: string | null) {
    session.error = error;
    if (error) {
        session.messages.push({ type: "danger", text: error });
    }
}

export async function api<T>(url: string, data: any = null, method?: string) {
    session.loading++;
    setError(null);
    try {
      return await fetchV2<T>(url, data, method);
    } catch (error) {
      setError(error as string);
    } finally {
      session.loading--;
    }

    return {} as T;
}

export default session;