import { useRouter } from "next/navigation";
import React from 'react';

// eslint-disable-next-line react/display-name
const witouthAuth = <Props extends Object>(Component: React.FC<any>) => (props: Props) => {

    // console.log(`typeof window`, typeof window)
    // if (typeof window !== "undefined") {
    //     const router = useRouter();
    //     let accessToken = localStorage.getItem('SA');
    //     const accessTokenIsExpired = (Date.now() / 1000) > Number(localStorage.getItem('EXP') || 0);
    //     if (!!accessToken && accessToken !== '' || !accessTokenIsExpired) {
    //         router.replace(`/`);
    //         return null;
    //     }
    // }

    return <Component {...props} />;
};

export default witouthAuth;