import getCurrentDate from '@/utils/getCurrentDate';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Schedule = {
	registration_start: string;
	registration_end: string;
	submission_start: string;
	submission_end: string;
	result_announcement: string;
	is_submitted: boolean;
};

export type Judge = {
	name: string;
	role: string;
	email: string;
	wallet: string;
	avatar: string;
	is_submitted: boolean;
};

export type Prize = {
	place: 1 | 2 | 3;
	reward: number;
	quantity: number;
};

export type Track = {
	track_name: string;
	description: string;
	prizes: Prize[];
	is_submitted: boolean;
};

export type Sponsor = {
	sponsor_name: string;
	prize_pool: number;
	wallet: string;
	logo: string;
	track: Track[];
	is_submitted: boolean;
};

export type Description = {
	hackathon_name: string;
	hackathon_description: string;
	hackathon_place: string;
	hackathon_overview: string;
};

interface createHackathonState {
	sponsors: Sponsor[];
	judges: Judge[];
	schedule: Schedule;
	description: Description;
}

const initialState: createHackathonState = {
	sponsors: [
		{
			sponsor_name: '',
			prize_pool: 0,
			wallet: '',
			logo: '',
			track: [
				{
					track_name: '',
					description: '',
					prizes: [
						{ place: 1, reward: 0, quantity: 0 },
						{ place: 2, reward: 0, quantity: 0 },
						{ place: 3, reward: 0, quantity: 0 },
					],
					is_submitted: false,
				},
			],
			is_submitted: false,
		},
	],
	judges: [
		{
			name: '',
			role: '',
			email: '',
			wallet: '',
			avatar: '',
			is_submitted: false,
		},
	],
	schedule: {
		registration_start: getCurrentDate(),
		registration_end: getCurrentDate(),
		submission_start: getCurrentDate(),
		submission_end: getCurrentDate(),
		result_announcement: getCurrentDate(),
		is_submitted: false,
	},
	description: {
		hackathon_name: '',
		hackathon_description: '',
		hackathon_place: '',
		hackathon_overview: '',
	},
};

export const createHackathonSlice = createSlice({
	name: 'createHackathon',
	initialState,
	reducers: {
		removeHackathon: (state) => {
			state = initialState;
		},

		// Sponsor
		submitSponsor: (
			state,
			action: PayloadAction<{ index: number; sponsor: Sponsor }>,
		) => {
			state.sponsors[action.payload.index] = action.payload.sponsor;
		},
		addNewSponsor: (state) => {
			state.sponsors = [
				...state.sponsors,
				{
					sponsor_name: '',
					prize_pool: 0,
					wallet: '',
					logo: '',
					track: [
						{
							track_name: '',
							description: '',
							prizes: [
								{ place: 1, reward: 0, quantity: 0 },
								{ place: 2, reward: 0, quantity: 0 },
								{ place: 3, reward: 0, quantity: 0 },
							],
							is_submitted: false,
						},
					],
					is_submitted: false,
				},
			];
		},

		// Track
		submitTrack: (
			state,
			action: PayloadAction<{
				sponsorIndex: number;
				trackIndex: number;
				track: Track;
			}>,
		) => {
			const tempTrack = [
				...state.sponsors[action.payload.sponsorIndex].track,
			];

			tempTrack[action.payload.trackIndex] = action.payload.track;

			state.sponsors[action.payload.sponsorIndex].track = tempTrack;
		},

		addNewTrack: (state, action: PayloadAction<number>) => {
			state.sponsors[action.payload].track = [
				...state.sponsors[action.payload].track,
				{
					track_name: '',
					description: '',
					prizes: [
						{ place: 1, reward: 0, quantity: 0 },
						{ place: 2, reward: 0, quantity: 0 },
						{ place: 3, reward: 0, quantity: 0 },
					],
					is_submitted: false,
				},
			];
		},

		// Judge

		submitJudge: (
			state,
			action: PayloadAction<{ index: number; judge: Judge }>,
		) => {
			state.judges[action.payload.index] = action.payload.judge;
		},

		addNewJudge: (state) => {
			state.judges = [
				...state.judges,
				{
					name: '',
					role: '',
					email: '',
					wallet: '',
					avatar: '',
					is_submitted: false,
				},
			];
		},

		// Schedule
		addSchedule: (state, action: PayloadAction<Schedule>) => {
			state.schedule = action.payload;
		},

		// Description
		submitDescription: (state, action: PayloadAction<Description>) => {
			state.description = action.payload;
		},
	},
});

export const {
	submitSponsor,
	addNewTrack,
	addNewJudge,
	addSchedule,
	submitDescription,
	addNewSponsor,
	submitTrack,
	submitJudge,
	removeHackathon,
} = createHackathonSlice.actions;

export default createHackathonSlice.reducer;
