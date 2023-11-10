import { useDefaultLayout } from '@/hooks/useLayout';
import { Button, ButtonGroup, Container, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import SponsorStep from '../../components/pages/create-hackathon/SponsorStep';
import JudgeStep from '../../components/pages/create-hackathon/JudgeStep';
import DescriptionStep from '@/components/pages/create-hackathon/DescriptionStep';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import axios from 'axios';
import TrackStep from '@/components/pages/create-hackathon/TrackStep';
import ScheduleStep from '@/components/pages/create-hackathon/ScheduleStep';

export default function CreateHackathon() {
	const [step, setStep] = useState<number>(1);
	const router = useRouter();

	const createHackathonData = useSelector(
		(state: RootState) => state.createHackthon,
	);

	const submitHackathon = async () => {
		const nearWallet = JSON.parse(
			localStorage.getItem('near_app_wallet_auth_key') as string,
		);
		const submitData = {
			creator: nearWallet.accountId,
			...createHackathonData,
		};

		const config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: `${process.env.API_URL}/api/hackathon/create`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify(submitData),
		};
		
		await axios.request(config).catch((error) => {
			console.log(error);
		});
	};

	const nextStep = () => {
		if (step < 5) setStep(step + 1);
	};

	const prevStep = () => {
		if (step > 1) setStep(step - 1);
	};

	const renderStep = (step: number) => {
		switch (step) {
			case 1:
				return <DescriptionStep />;
			case 2:
				return <SponsorStep />;
			case 3:
				return <TrackStep />;
			case 4:
				return <JudgeStep />;
			case 5:
				return <ScheduleStep />;
			default:
				break;
		}
	};

	return (
		<Container maxW={'1440px'}>
			{renderStep(step)}
			<Flex
				justify={'flex-end'}
				mt={'1rem'}
			>
				<ButtonGroup>
					{step > 1 ? (
						<Button
							variant={'ghost'}
							onClick={prevStep}
						>
							Prev Step
						</Button>
					) : (
						<Button
							variant={'ghost'}
							onClick={() => router.push('/hackathon')}
						>
							Cancel
						</Button>
					)}
					{step < 5 ? (
						<Button
							variant={'ghost'}
							colorScheme='teal'
							onClick={nextStep}
						>
							Next Step
						</Button>
					) : (
						<Button
							variant={'solid'}
							colorScheme='teal'
							onClick={submitHackathon}
						>
							Complete
						</Button>
					)}
				</ButtonGroup>
			</Flex>
		</Container>
	);
}

CreateHackathon.getLayout = useDefaultLayout;
