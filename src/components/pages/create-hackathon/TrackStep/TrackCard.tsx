import {
	Prize,
	Track,
	submitTrack,
} from '@/redux/slicers/createHackathonSlice';
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
	const [name, setName] = useState<string>(trackData?.track_name);

	const [description, setDescription] = useState<string>(
		trackData?.description,
	);

	const [firstPrize, setFirstPrize] = useState<Prize>(trackData?.prizes[0]);

	const [secondPrize, setSecondPrice] = useState<Prize>(trackData?.prizes[1]);

	const [thirdPrize, setThirdPrize] = useState<Prize>(trackData?.prizes[2]);

	const isSubmitted = useSelector(
		(state: RootState) =>
			state.createHackthon.sponsors[sponsorIndex].track[trackIndex]
				.is_submitted,
	);

	const onSubmit: SubmitHandler<Track> = (data) => {
		if (!isSubmitted) {
			dispatch(
				submitTrack({
					sponsorIndex: sponsorIndex,
					trackIndex: trackIndex,
					track: {
						...data,
						is_submitted: true,
						prizes: [
							{
								place: firstPrize.place,
								reward: firstPrize.reward,
								quantity: firstPrize.quantity,
							},
							{
								place: secondPrize.place,
								reward: secondPrize.reward,
								quantity: secondPrize.quantity,
							},
							{
								place: thirdPrize.place,
								reward: thirdPrize.reward,
								quantity: thirdPrize.quantity,
							},
						],
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
						is_submitted: false,
						prizes: [
							{
								place: firstPrize.place,
								reward: firstPrize.reward,
								quantity: firstPrize.quantity,
							},
							{
								place: secondPrize.place,
								reward: secondPrize.reward,
								quantity: secondPrize.quantity,
							},
							{
								place: thirdPrize.place,
								reward: thirdPrize.reward,
								quantity: thirdPrize.quantity,
							},
						],
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
							{...register('track_name', {
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
							value={firstPrize?.reward}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setFirstPrize({
									place: 1,
									reward: Number(event.target.value),
									quantity: firstPrize.quantity,
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
							value={firstPrize?.quantity}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setFirstPrize({
									place: 1,
									reward: firstPrize.reward,
									quantity: Number(event.target.value),
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
							value={secondPrize?.reward}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setSecondPrice({
									place: 2,
									reward: Number(event.target.value),
									quantity: secondPrize.quantity,
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
							value={secondPrize?.quantity}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setSecondPrice({
									place: 2,
									reward: secondPrize.reward,
									quantity: Number(event.target.value),
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
							value={thirdPrize?.reward}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setThirdPrize({
									place: 3,
									reward: Number(event.target.value),
									quantity: thirdPrize.quantity,
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
							value={thirdPrize?.quantity}
							onChange={(
								event: ChangeEvent<HTMLInputElement>,
							) => {
								setThirdPrize({
									place: 3,
									reward: thirdPrize.reward,
									quantity: Number(event.target.value),
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
