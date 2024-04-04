import { API_DATACENTRAL_V2_URL } from "@/libs/constants";
import { withToken } from "@/utils/functions";
import { useQueryNotification } from "./useQueryNotification";

const resolveUserInformation = async () =>
    await withToken(`${API_DATACENTRAL_V2_URL}/employees/current`, {}, "GET", {}, {})
        .then(({ data }: { data: any }) => {
            if (data?.error) return data;
            return data;
        })
        .catch((error: any) => {
            return error.response;
        });

const useAuth = () => {

    const { data } = useQueryNotification({
        key: "employee.current",
        func: async () => await resolveUserInformation(),
        options: {
            enabled: (typeof window !== "undefined") ? !!localStorage.getItem('SA') : false,
        }
    }) as any
    return [data?.data?.employee];
};

export default useAuth;
