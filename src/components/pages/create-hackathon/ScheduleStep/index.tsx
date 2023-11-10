import { Schedule, addSchedule } from '@/redux/slicers/createHackathonSlice';
import { RootState } from '@/redux/store';
import {
	Button,
	Card,
	Center,
	FormControl,
	Input,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function ScheduleStep() {
	const dispatch = useDispatch();
	const isSubmitted = useSelector(
		(state: RootState) => state.createHackthon.schedule.is_submitted,
	);

	const { register, handleSubmit } = useForm<Schedule>();
	const onSubmit: SubmitHandler<Schedule> = (data) => {
		if (isSubmitted) {
			dispatch(addSchedule({ ...data, is_submitted: false }));
		} else {
			dispatch(addSchedule({ ...data, is_submitted: true }));
		}
	};

	return (
		<Center>
			<Card
				width={'fit-content'}
				p={'1rem'}
				gap={'1rem'}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl>
						<InputGroup mb={'1rem'}>
							<InputLeftAddon
								children='Registration starts'
								minW={'12rem'}
								fontWeight={'semibold'}
							/>
							<Input
								type='datetime-local'
								disabled={isSubmitted}
								{...register('registration_start', {
									required: true,
								})}
							/>
						</InputGroup>
						<InputGroup mb={'1rem'}>
							<InputLeftAddon
								children='Registration ends'
								minW={'12rem'}
								fontWeight={'semibold'}
							/>
							<Input
								type='datetime-local'
								disabled={isSubmitted}
								{...register('registration_end', {
									required: true,
								})}
							/>
						</InputGroup>
						<InputGroup mb={'1rem'}>
							<InputLeftAddon
								children='Submission starts'
								minW={'12rem'}
								fontWeight={'semibold'}
							/>
							<Input
								type='datetime-local'
								disabled={isSubmitted}
								{...register('submission_start', {
									required: true,
								})}
							/>
						</InputGroup>
						<InputGroup mb={'1rem'}>
							<InputLeftAddon
								children='Submission ends'
								minW={'12rem'}
								fontWeight={'semibold'}
							/>
							<Input
								type='datetime-local'
								disabled={isSubmitted}
								{...register('submission_end', {
									required: true,
								})}
							/>
						</InputGroup>
						<InputGroup mb={'1rem'}>
							<InputLeftAddon
								children='Results announced'
								minW={'12rem'}
								fontWeight={'semibold'}
							/>
							<Input
								type='datetime-local'
								disabled={isSubmitted}
								{...register('result_announcement', {
									required: true,
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
		</Center>
	);
}
