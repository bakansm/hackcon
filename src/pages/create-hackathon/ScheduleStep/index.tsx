import {
	Button,
	Card,
	Center,
	FormControl,
	Input,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function ScheduleStep() {
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	return (
		<Center>
			<Card
				width={'fit-content'}
				p={'1rem'}
				gap={'1rem'}
			>
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
						/>
					</InputGroup>
					{isSubmitted ? (
						<Button
							colorScheme='teal'
							variant={'outline'}
							type='submit'
							w={'100%'}
							onClick={() => setIsSubmitted(false)}
						>
							Edit
						</Button>
					) : (
						<Button
							colorScheme='teal'
							type='submit'
							w={'100%'}
							onClick={() => setIsSubmitted(true)}
						>
							Submit
						</Button>
					)}
				</FormControl>
			</Card>
		</Center>
	);
}
