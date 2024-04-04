"use client"
import witouthAuth from "@/hocs/withoutAuth";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from 'react';

const LoginComponent = dynamic(() => import("@/components/Login"));

const Login: React.FC = witouthAuth(() => {
    return (
        <Box
            sx={{ background: 'url(https://masterisehomes.com/storage/media/Z1pMCjKxTDjFaBM0Wh9FbPkQyl6AwFCWj3SP3VrQ.jpeg) no-repeat center' }}>
            <Head>
                <title>MASTERIES HOMES | Login</title>
                <meta name="description" content="You must provide the credential before continue" />
            </Head>

            <Grid container justifyContent="center" sx={{ minHeight: '100vh' }}>
                <Grid item xl={10} lg={10} md={12} sm={12} xs={12}>
                    <Grid container justifyContent="center" sx={{ minHeight: '100%' }}>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}
                            sx={{ display: 'flex', alignContent: 'center', p: { xs: 2 } }}>
                            <Card sx={{ width: '100%', margin: 'auto' }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography sx={{ fontWeight: 'bold', mb: { xl: 4, lg: 4, md: 4, sm: 3, xs: 3 } }} component="h6" variant="h6">Login</Typography>
                                    <LoginComponent />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
});

export default Login