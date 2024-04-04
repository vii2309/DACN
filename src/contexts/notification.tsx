import React from 'react';



type NotificationType = {
    open: boolean
    message?: string
    severity: string
    duration: number
}

const InitializeProps = {
    notification: {
        open: false,
        message: '',
        severity: "success",
        duration: 5000
    },
    setNotification: undefined
}
interface NotificationContextProps {
    notification: NotificationType
    setNotification?: any
}

const NotificationContext = React.createContext<NotificationContextProps>(InitializeProps);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const defaults = {
        open: false,
        message: '',
        severity: 'success',
        duration: 5000,
    };

    const setNotification = (notification: NotificationType) =>
        setState((prevState) => ({
            ...prevState,
            notification: { ...InitializeProps.notification, ...notification },
        }));

    const [state, setState] = React.useState({
        notification: defaults,
        setNotification: setNotification,
    });

    return (
        <NotificationContext.Provider value={{ ...state }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotificationContext = () => {
    return React.useContext(NotificationContext);
};
