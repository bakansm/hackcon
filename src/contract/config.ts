import { keyStores } from 'near-api-js';

const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();

// Testnet
export const testnetConnectionConfig = {
	networkId: 'testnet',
	keyStore: myKeyStore,
	contractName: 'dev-1699523300799-54394562458367',
	nodeUrl: 'https://rpc.testnet.near.org',
	walletUrl: 'https://wallet.testnet.near.org',
	helperUrl: 'https://helper.testnet.near.org',
	explorerUrl: 'https://explorer.testnet.near.org',
};

// Mainnet
export const mainnetConnectionConfig = {
	networkId: 'mainnet',
	keyStore: myKeyStore, // first create a key store
	nodeUrl: 'https://rpc.mainnet.near.org',
	walletUrl: 'https://wallet.mainnet.near.org',
	helperUrl: 'https://helper.mainnet.near.org',
	explorerUrl: 'https://explorer.mainnet.near.org',
};

// Betanet
export const betaConnectionConfig = {
	networkId: 'betanet',
	keyStore: myKeyStore, // first create a key store
	nodeUrl: 'https://rpc.betanet.near.org',
	walletUrl: 'https://wallet.betanet.near.org',
	helperUrl: 'https://helper.betanet.near.org',
	explorerUrl: 'https://explorer.betanet.near.org',
};
