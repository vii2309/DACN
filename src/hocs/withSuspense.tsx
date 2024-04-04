"use client"
import React from 'react';

const withSuspense = (Component: React.FC | any, Skeleton: React.FC) =>
	// eslint-disable-next-line react/display-name
	({ ...props }) => {
		const [loading, setLoading] = React.useState<boolean>(true);

		// perform handle client-side loaded
		React.useEffect(() => setLoading(false), []);

		return loading ? (
			Skeleton ? (
				<Skeleton />
			) : null
		) : (
			<React.Suspense fallback={Skeleton ? <Skeleton /> : null}>
				<Component {...props} />
			</React.Suspense>
		);
	};

export default withSuspense;
