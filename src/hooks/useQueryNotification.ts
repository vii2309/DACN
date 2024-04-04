import { QueryFunction, QueryKey, QueryOptions, useQuery } from "react-query";

type notifyOnChangeTypes = 'isStale'

interface Options extends QueryOptions {
    readonly enabled?: boolean;
    suspense?: boolean,
    staleTime?: number,
    notifyOnChangePropsExclusions?: [notifyOnChangeTypes]
}

interface QueryNotificationPropTypes {
    key: QueryKey,
    func: QueryFunction,
    options: Options
}


export const useQueryNotification = ({ key, func, options = {} }: QueryNotificationPropTypes) => {
    return useQuery(key, func, {
        onError: (error) => {
            console.log(error);
        },
        onSuccess: (data) => {
            // nothing to do
        },
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        staleTime: 3600,
        retry: false,
        ...options
    });
};

