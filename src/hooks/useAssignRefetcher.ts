import { useModuleContext } from '@/contexts/module';
import React from 'react';

const useAssignRefetcher = (object: object, dependencies: any[]) => {
    const { handleAssignRefetcher } = useModuleContext();
    React.useEffect(() => {
        try {
            handleAssignRefetcher(object)
        } catch (error: any) {
            return console.log(error?.message)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dependencies]);
}

export default useAssignRefetcher