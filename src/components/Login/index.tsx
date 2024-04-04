"use client"
import React from 'react'
import { Box, Button, Card, CardContent, Grid, Link, TextField, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from 'next/navigation';
import { LoginTypes } from '@/libs/types';
import { loginValidator } from '@/libs/validators';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { vestResolver } from '@hookform/resolvers/vest';
import { queryStringParse } from '@/utils/functions';
import { useNotificationContext } from '@/contexts/notification';

const SocialLogin = dynamic(() => import("@/components/SocialLogin"));

type isErrorType = {
    status: boolean,
    message: string | null
}


const Login: React.FC = () => {
    const router = useRouter();

    const [submit, setSubmit] = React.useState<boolean>(false)
    const { setNotification } = useNotificationContext()
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginTypes>({
        resolver: vestResolver(loginValidator)
    });

    const onSubmit: SubmitHandler<LoginTypes> = (data: LoginTypes) => {
        setSubmit(true)
        // UserApi.Login(data).then(async ({ data, errors }: any) => {
        //     if (errors) {
        //         console.log(errors)
        //         setSubmit(false)

        //         return setNotification({
        //             open: true,
        //             message: errors?.[0].message || "Login failed.",
        //             severity: "error"
        //         })
        //     };

        //     setSubmit(false)

        //     const { access_token, exp, uuid } = data;
        //     if (typeof access_token === 'undefined') return;


        //     localStorage.setItem('SA', access_token);
        //     localStorage.setItem('EXP', exp);
        //     localStorage.setItem('UUID', uuid);

        //     const redirect = location.search !== '' ? queryStringParse(location.search).redirect : '/';
        //     return await router.replace(!redirect ? '' : redirect as string, {});
        // });
    };
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mb: 3 }}>
                <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type="text"
                            size="small"
                            label="Username (*)"
                            error={!!errors.email}
                            InputLabelProps={{ shrink: true }}
                            helperText={errors?.email?.message}
                            sx={{ minWidth: '100%', "& input": { fontSize: 13 } }}
                        />
                    )}
                />
            </Box>
            <Box sx={{ mb: 3 }}>
                <Controller
                    name="password"
                    defaultValue=""
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type="password"
                            size="small"
                            label="Password (*)"
                            error={!!errors.password}
                            InputLabelProps={{ shrink: true }}
                            helperText={errors?.password?.message}
                            sx={{ minWidth: '100%', "& input": { fontSize: 13 } }}
                        />
                    )}
                />
            </Box>
            <Box sx={{ mb: 3 }}>
                <Link href={"/auth/forgotpw"}>
                    <Typography sx={{ fontSize: 14, textAlign: 'center' }}>Forgot
                        password?</Typography>
                </Link>
            </Box>
            <Box sx={{ mb: 3 }}>
                <Button variant="contained"
                    disabled={submit}
                    color="primary" type="submit" fullWidth={true}
                    sx={{ mr: 2 }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                        LOGIN</Typography>
                </Button>
            </Box>
            <SocialLogin />
        </Box>
    )
}

export default Login