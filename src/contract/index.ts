// @ts-nocheck

import { Wallet } from '../../near-wallet';
import { utils } from 'near-api-js';

const contractId = 'dev-1699588101475-10090561103001';

export const depositToPool = async (amount) => {
	const wallet = new Wallet({
		createAccessKeyFor: contractId,
	});
	await wallet.startUp();
	await wallet.callMethod({
		contractId: contractId,
		method: 'deposit_pool_by_sponser',
		args: { pool_id: 'NEAR' },
		deposit: utils.format.parseNearAmount(amount),
	});
};

export const viewDepositPool = async () => {
	const wallet = new Wallet({
		createAccessKeyFor: contractId,
	});
	await wallet.startUp();
	const result = await wallet.viewMethod({
		contractId: contractId,
		method: 'get_all_pool_metadata',
		args: {},
	});
	return result;
};

export const submitPoint = async (data) => {
	const wallet = new Wallet({
		createAccessKeyFor: contractId,
	});
	await wallet.startUp();
	await wallet.callMethod({
		contractId: contractId,
		method: 'submit_point',
		args: data,
	});
};

export const viewResult = async (hackathonId) => {
	const wallet = new Wallet({
		createAccessKeyFor: contractId,
	});
	await wallet.startUp();
	const result = await wallet.viewMethod({
		contractId: contractId,
		method: 'get_all_result_hackathon_by_id',
		args: { hackathon_id: hackathonId },
	});
	return result;
};
// cargo make call deposit_pool_by_sponser '{"pool_id": "NEAR"}' --accountId $SPONSER1 --amount 2 dev-1699523300799-54394562458367
// { contractId, methodName, args, gas, attachedDeposit, walletMeta, walletCallbackUrl, stringify, jsContract }: ChangeFunctionCallOptions):
// cargo make call submit_point '{"track_id": "Track 1", "point": 8, "attendee_id": "orasci1", "hackathon_id":"near-apac", "project_id": "Hackcon1"}' --accountId $JUDGE1
// cargo make call calculate_result_final '{"track_id": "Defi", "hackathon_id":"0x654cfea9a17787140b3f8d40f31f"}' --accountId $ADMIN
