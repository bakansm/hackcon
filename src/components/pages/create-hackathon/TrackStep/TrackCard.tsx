import { Track, submitTrack } from '@/redux/slicers/createHackathonSlice';
import { RootState } from '@/redux/store';
import {
	Button,
	Card,
	FormControl,
	Input,
	InputGroup,
	InputLeftAddon,
	Textarea,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function TrackCard({
	trackData,
	sponsorIndex,
	trackIndex,
}: {
	trackData: Track;
	sponsorIndex: number;
	trackIndex: number;
}) {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm<Track>();
	const [name, setName] = useState<string>(trackData?.name);

	const [description, setDescription] = useState<string>(
		trackData?.description,
	);

	const [firstPrize, setFirstPrize] = useState<{
		bounty: number;
		amount: number;
	}>(trackData?.firstPrize);

	const [secondPrize, setSecondPrice] = useState<{
		bounty: number;
		amount: number;
	}>(trackData?.secondPrize);

	const [thirdPrize, setThirdPrize] = useState<{
		bounty: number;
		amount: number;
	}>(trackData?.thirdPrize);

	const isSubmitted = useSelector(
		(state: RootState) =>
			state.createHackthon.sponsor[sponsorIndex].track[trackIndex]
				.isSubmitted,
	);

	const onSubmit: SubmitHandler<Track> = (data) => {
		if (!isSubmitted) {
			dispatch(
				submitTrack({
					sponsorIndex: sponsorIndex,
					trackIndex: trackIndex,
					track: {
						...data,
						isSubmitted: true,
						firstPrize: firstPrize,
						secondPrize: secondPrize,
						thirdPrize: thirdPrize,
					},
				}),
			);
		} else {
			dispatch(
				submitTrack({
					sponsorIndex: sponsorIndex,
					trackIndex: trackIndex,
					track: {
						...data,
						isSubmitted: false,
						firstPrize: firstPrize,
						secondPrize: secondPrize,
						thirdPrize: thirdPrize,
					},
				}),
			);
		}
	};

	return (
		<Card
			p='1rem'
			w={'100%'}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon
							children='Track name'
							minW={'8rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							mb={'1rem'}
							value={name}
							focusBorderColor='teal.500'
							{...register('name', {
								required: true,
								onChange(event) {
									setName(event.target.value);
								},
							})}
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon
							children='Description'
							minW={'8rem'}
							fontWeight={'semibold'}
						/>
						<Textarea
							focusBorderColor='teal.500'
							value={description}
							{...register('description', {
								required: true,
								onChange(event) {
									setDescription(event.target.value);
								},
							})}
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup
						key={0}
						mt={'1rem'}
					>
						<InputLeftAddon
							children='1st Prize'
							minW={'8rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='number'
							focusBorderColor='teal.500'
							value={firstPrize?.bounty}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setFirstPrize({
									bounty: Number(event.target.value),
									amount: firstPrize.amount,
								});
							}}
						/>
						<InputLeftAddon
							ml={'1rem'}
							children='Amount'
							minW={'6rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='number'
							focusBorderColor='teal.500'
							w={'4rem'}
							value={firstPrize?.amount}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setFirstPrize({
									bounty: firstPrize.bounty,
									amount: Number(event.target.value),
								});
							}}
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup
						key={1}
						mt={'1rem'}
					>
						<InputLeftAddon
							children='2nd Prize'
							minW={'8rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='number'
							focusBorderColor='teal.500'
							value={secondPrize?.bounty}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setSecondPrice({
									bounty: Number(event.target.value),
									amount: secondPrize.amount,
								});
							}}
						/>
						<InputLeftAddon
							ml={'1rem'}
							children='Amount'
							minW={'6rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='number'
							focusBorderColor='teal.500'
							w={'4rem'}
							value={secondPrize?.amount}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setSecondPrice({
									bounty: secondPrize.bounty,
									amount: Number(event.target.value),
								});
							}}
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup
						key={2}
						mt={'1rem'}
					>
						<InputLeftAddon
							children='3rd Prize'
							minW={'8rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='number'
							focusBorderColor='teal.500'
							value={thirdPrize?.bounty}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setThirdPrize({
									bounty: Number(event.target.value),
									amount: thirdPrize.amount,
								});
							}}
						/>
						<InputLeftAddon
							ml={'1rem'}
							children='Amount'
							minW={'6rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='number'
							focusBorderColor='teal.500'
							w={'4rem'}
							value={thirdPrize?.amount}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setThirdPrize({
									bounty: thirdPrize.bounty,
									amount: Number(event.target.value),
								});
							}}
						/>
					</InputGroup>
				</FormControl>
				{isSubmitted ? (
					<Button
						variant={'outline'}
						colorScheme='teal'
						type='submit'
						w={'min-content'}
						mt={'1rem'}
					>
						Edit
					</Button>
				) : (
					<Button
						colorScheme='teal'
						type='submit'
						w={'min-content'}
						mt={'1rem'}
					>
						Submit
					</Button>
				)}
			</form>
		</Card>
	);
}
