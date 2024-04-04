import { EmployeeType } from '@/libs/types';
import React, { useContext } from 'react';
import useAuth from '../../../cp-campus/campus-client-v3/src/hooks/useAuth';

const InitializeProps = {
    employee: undefined
}
interface EmployeeContextProps {
    employee?: EmployeeType
}

const EmployeeContext = React.createContext<EmployeeContextProps>(InitializeProps)

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [employee] = useAuth();

    const [state, setState] = React.useState<any>({
        employee: employee
    });

    React.useEffect(() => {
        if (employee) setState((prevState: any) => ({ ...prevState, employee: employee }));
    }, [employee]);

    return (
        <EmployeeContext.Provider value={state}>
            {children}
        </EmployeeContext.Provider>
    )
};

export const useEmployeeContext = () => {
    return useContext(EmployeeContext);
};