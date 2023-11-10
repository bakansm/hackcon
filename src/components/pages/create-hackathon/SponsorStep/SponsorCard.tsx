import { Sponsor, submitSponsor } from '@/redux/slicers/createHackathonSlice';
import { RootState } from '@/redux/store';
import {
	Button,
	Card,
	CardHeader,
	Divider,
	FormControl,
	Heading,
	Input,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function SponsorCard({
	cardData,
	index,
}: {
	cardData: Sponsor;
	index: number;
}) {
	const [name, setName] = useState<string>(cardData.sponsor_name);
	const [prizePool, setPrizePool] = useState<number>(cardData.prize_pool);
	const [walletAddress, setWalletAddress] = useState<string>(cardData.wallet);
	const [logoImage, setLogoImage] = useState<string>(cardData.logo);
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm<Sponsor>();

	const isSubmitted = useSelector(
		(state: RootState) => state.createHackthon.sponsors[index].is_submitted,
	);

	const onSubmit: SubmitHandler<Sponsor> = (data) => {
		if (!isSubmitted) {
			dispatch(
				submitSponsor({
					index,
					sponsor: {
						...data,
						track: [
							{
								track_name: '',
								description: '',
								prizes: [
									{
										place: 1,
										reward: 0,
										quantity: 0,
									},
									{
										place: 2,
										reward: 0,
										quantity: 0,
									},
									{
										place: 3,
										reward: 0,
										quantity: 0,
									},
								],
								is_submitted: false,
							},
						],
						is_submitted: true,
					},
				}),
			);
		} else {
			dispatch(
				submitSponsor({
					index,
					sponsor: {
						...data,
						track: [
							{
								track_name: '',
								description: '',
								prizes: [
									{
										place: 1,
										reward: 0,
										quantity: 0,
									},
									{
										place: 2,
										reward: 0,
										quantity: 0,
									},
									{
										place: 3,
										reward: 0,
										quantity: 0,
									},
								],
								is_submitted: false,
							},
						],
						is_submitted: false,
					},
				}),
			);
		}
	};

	return (
		<Card
			width={'fit-content'}
			p={'1rem'}
			gap={'1rem'}
		>
			<CardHeader
				m={0}
				p={0}
				textAlign={'center'}
			>
				<Heading
					m={0}
					p={0}
				>
					{name}
				</Heading>
			</CardHeader>
			<Divider
				borderColor={'teal'}
				m={0}
			/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isRequired>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Sponsor name'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							focusBorderColor='teal.500'
							value={name}
							disabled={isSubmitted}
							{...register('sponsor_name', {
								required: true,
								onChange(event) {
									setName(event.target.value);
								},
							})}
						/>
					</InputGroup>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Prize pool'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='number'
							focusBorderColor='teal.500'
							value={prizePool}
							disabled={isSubmitted}
							{...register('prize_pool', {
								required: true,
								onChange(event) {
									setPrizePool(event.target.value);
								},
							})}
						/>
					</InputGroup>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Wallet address'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							focusBorderColor='teal.500'
							value={walletAddress}
							disabled={isSubmitted}
							{...register('wallet', {
								required: true,
								onChange(event) {
									setWalletAddress(event.target.value);
								},
							})}
						/>
					</InputGroup>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Logo image link'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							disabled={isSubmitted}
							value={logoImage}
							{...register('logo', {
								required: true,
								onChange(event) {
									setLogoImage(event.target.value);
								},
							})}
						/>
					</InputGroup>
					{isSubmitted ? (
						<Button
							colorScheme='teal'
							variant={'outline'}
							type='submit'
							w={'100%'}
						>
							Edit
						</Button>
					) : (
						<Button
							colorScheme='teal'
							type='submit'
							w={'100%'}
						>
							Submit
						</Button>
					)}
				</FormControl>
			</form>
		</Card>
	);
}
