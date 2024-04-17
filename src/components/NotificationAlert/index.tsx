import { useNotificationContext } from '@/contexts/notification';
import { Alert, Slide, Snackbar } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

const TransitionDown: React.JSXElementConstructor<TransitionProps & {
	children: React.ReactElement<any, any>;
}> = ({ children, ...props }) => {
	return <Slide {...props} direction="down">
		{children}
	</Slide>;
};

const NotificationAlert = () => {
	const { notification, setNotification } = useNotificationContext();

	return (
		<>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={notification.open}
				autoHideDuration={notification.duration || 1000}
				onClose={() => setNotification({ open: false, severity: '' })}
				TransitionComponent={TransitionDown}
			>
				<Alert onClose={() => setNotification({ open: false })}
					severity={notification?.severity === "success" ? "success" : "error"} sx={{ width: '100%' }}>
					{notification?.message}
				</Alert>
			</Snackbar>
		</>
	);
};

export default NotificationAlert;
