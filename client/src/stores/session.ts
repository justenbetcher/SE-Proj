//import router from "@/router";
import fetchV2 from "@/services/fetchV2";
import { reactive } from "vue";

export interface Message {
    text: string;
    type: "danger" | "warning" | "success" | "info";
}

const session = reactive({
    loading: 0,
    error: null as string | null,
    messages: [] as Message[],
});


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