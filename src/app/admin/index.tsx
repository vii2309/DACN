"use client"
import NotificationAlert from "@/components/NotificationAlert";
import { NotificationProvider } from '@/contexts/notification';
import theme from '../../../styles/theme';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <ThemeProvider theme={theme}>
            <NotificationProvider>
                <NotificationAlert />
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </NotificationProvider>
        </ThemeProvider>
    )
}

export default App