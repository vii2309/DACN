"use client"
import { usePathname } from 'next/navigation';
/* eslint-disable react/display-name */
import React from 'react';

const withManagement = <Props extends Object>(Component: React.FC<any>) => (props: Props) => {
    const pathname = usePathname()
    const isManagement = pathname.match(/management/g);
    return !isManagement ? null : <Component {...props} />
};

export default withManagement;
