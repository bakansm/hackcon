import '@/styles/theme.css';
import '@/styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@near-wallet-selector/modal-ui/styles.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Toaster } from '@/components/lib/Toast';
import { ChakraProvider } from '@chakra-ui/react';
import { useBosLoaderInitializer } from '@/hooks/useBosLoaderInitializer';
import { useHashUrlBackwardsCompatibility } from '@/hooks/useHashUrlBackwardsCompatibility';
import type { NextPageWithLayout } from '@/utils/types';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { useEffect } from 'react';
import { Wallet } from '../../near-wallet';

const VmInitializer = dynamic(() => import('../components/vm/VmInitializer'), {
	ssr: false,
});

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	useBosLoaderInitializer();
	useHashUrlBackwardsCompatibility();

	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<>
			<Head>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<VmInitializer />

			<ChakraProvider>
				<Provider store={store}>
					{getLayout(<Component {...pageProps} />)}
				</Provider>
			</ChakraProvider>

			<Toaster />
		</>
	);
}
