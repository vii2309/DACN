import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'VNETWORK Learning Center | Login',
	description: 'You must provide the credential before continue',
}

const AuthenticationLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<>
			{children}
		</>
	)
}

export default AuthenticationLayout
