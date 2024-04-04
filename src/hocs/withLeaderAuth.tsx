"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import EmployeeApi from '@/services/EmployeeApi';
import Forbidden from "@/components/Forbidden"

type ComponentProps = React.ComponentType | any;

// eslint-disable-next-line react/display-name
const withLeaderAuth = <Props extends Object>(Component: ComponentProps) => (props: Props) => {
    const router = useRouter();

    if (typeof window !== "undefined") {
        const { data } = EmployeeApi.Information() as any;

        const position = data?.employee?.employee_position;

        if ((localStorage.getItem('SA') === null) || (localStorage.getItem('SA') === '')) {
            router.replace(`/auth/login?redirect=${location.pathname}`);

            return null;
        }

        if (position === 'Staff' || position === null) {
            return (
                <Forbidden />
            )
        }

        return <Component {...props} />;
    }

    return (
        <></>
    );
};

export default withLeaderAuth;
