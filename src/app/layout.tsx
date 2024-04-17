import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import React from 'react';
import "./globals.css";
import App from "./index";

const roboto = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
	title: 'VNETWORK Learning Center | Home',
	description: 'Learning project with next as typescript',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {

	return (
		<html lang="en">
			<head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="application-name" content="Vnetwork Campus PWA" />
				<meta name="apple-mobile-web-app-capable" content='yes' />
				<meta name="apple-mobile-web-app-status-bar-style" content='default' />
				<meta name="apple-mobile-web-app-title" content="Vnetwork Campus PWA" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="theme-color" content="#FFFFFF" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
				<link rel="dns-prefetch" href="https://static.vncdn.vn" />
				<link rel="dns-prefetch" href="https://images.vncdn.vn" />
				<link rel="apple-touch-icon" sizes="57x57" href={"/icons/apple-icon-57x57.png"} />
				<link rel="apple-touch-icon" sizes="60x60" href={"/icons/apple-icon-60x60.png"} />
				<link rel="apple-touch-icon" sizes="72x72" href={"/icons/apple-icon-72x72.png"} />
				<link rel="apple-touch-icon" sizes="76x76" href={"/icons/apple-icon-76x76.png"} />
				<link rel="apple-touch-icon" sizes="114x114" href={"/icons/apple-icon-114x114.png"} />
				<link rel="apple-touch-icon" sizes="120x120" href={"/icons/apple-icon-120x120.png"} />
				<link rel="apple-touch-icon" sizes="144x144" href={"/icons/apple-icon-144x144.png"} />
				<link rel="apple-touch-icon" sizes="152x152" href={"/icons/apple-icon-152x152.png"} />
				<link rel="apple-touch-icon" sizes="180x180" href={"/icons/apple-icon-180x180.png"} />
				<link rel="icon" type="image/png" sizes="192x192" href={"/icons/android-icon-192x192.png"} />
				<link rel="icon" href="/favicon.ico" sizes="any" />

				<link rel="icon" href={"/icons/favicon.ico"} />
				<link rel="icon" type="image/png" sizes="16x16" href={"/icons/favicon-16x16.png"} />
				<link rel="icon" type="image/png" sizes="32x32" href={"/icons/favicon-32x32.png"} />
				<link rel="icon" type="image/png" sizes="96x96" href={"/icons/favicon-96x96.png"} />
				{/* <link rel="manifest" href={"/manifest.json"} /> */}
				{/* Inject MUI styles first to match with the prepend: true configuration. */}
			</head>
			<body className={roboto.className} suppressHydrationWarning={true}>
				<App>
					{children}
				</App>
			</body>
		</html >
	)
}

export default RootLayout
