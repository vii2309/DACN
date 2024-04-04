import { redirect } from "next/navigation";
import React from 'react';

// eslint-disable-next-line react/display-name
const withAuth = <Props extends Object>(Component: React.FC<any>) => (props: Props) => {

    const [loading, setLoading] = React.useState<boolean>(false)

    React.useEffect(() => {
        setLoading(true)
        let accessToken = localStorage.getItem('SA');
        const accessTokenIsExpired = (Date.now() / 1000) > Number(localStorage.getItem('EXP') || 0);

        if (accessToken === null || accessToken === '' || accessTokenIsExpired) {
            return redirect(`/auth/login?redirect=${location.pathname}`)
        }
    }, [])
    if (!loading) return null;

    return <Component {...props} />;
};

export default withAuth;