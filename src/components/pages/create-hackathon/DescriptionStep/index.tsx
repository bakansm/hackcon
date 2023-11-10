import { VmComponent } from '@/components/vm/VmComponent';
import SocialPost from './SocialPost';
import {
	Button,
	FormControl,
	Heading,
	Input,
	InputGroup,
	InputLeftAddon,
	Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
	Description,
	submitDescription,
} from '@/redux/slicers/createHackathonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function DescriptionStep() {
	const descriptionData = useSelector(
		(state: RootState) => state.createHackthon.description,
	);

	const [overviewData, setOverviewData] = useState<any>();

	const [name, setName] = useState<string>(descriptionData.hackathon_name);
	const [place, setPlace] = useState<string>(descriptionData.hackathon_place);
	const [description, setDescription] = useState<string>(
		descriptionData.hackathon_description,
	);
	const { register, handleSubmit } = useForm<Description>();
	const dispatch = useDispatch();

	const saveData = (message: any) => {
		setOverviewData(message);
	};
	const onSubmit: SubmitHandler<Description> = (data) => {
		dispatch(
			submitDescription({ ...data, hackathon_overview: overviewData }),
		);
	};

	return (
		<>
			<Heading>Hackathon Description</Heading>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isRequired>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Hackathon name'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							focusBorderColor='teal.500'
							value={name}
							{...register('hackathon_name', {
								required: true,
								onChange(event) {
									setName(event.target.value);
								},
							})}
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Description'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Textarea
							height={'5rem'}
							resize={'none'}
							placeholder='Short description about 150 words'
							focusBorderColor='teal.500'
							value={description}
							{...register('hackathon_description', {
								required: true,
								onChange(event) {
									setDescription(event.target.value);
								},
							})}
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup mb={'1rem'}>
						<InputLeftAddon
							children='Place'
							minW={'10rem'}
							fontWeight={'semibold'}
						/>
						<Input
							type='text'
							focusBorderColor='teal.500'
							value={place}
							{...register('hackathon_place', {
								required: true,
								onChange(event) {
									setPlace(event.target.value);
								},
							})}
						/>
					</InputGroup>
				</FormControl>
				<Button
					mb={'1rem'}
					colorScheme='teal'
					type='submit'
				>
					Submit
				</Button>
			</form>
			<SocialPost saveData={saveData} />
		</>
	);
}
