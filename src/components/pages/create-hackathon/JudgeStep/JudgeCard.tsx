import {
	Button,
	Card,
	FormControl,
	Input,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function JudgeCard() {
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	return (
		<Card
			width={'fit-content'}
			p={'1rem'}
			gap={'1rem'}
		>
			<FormControl>
				<InputGroup mb={'1rem'}>
					<InputLeftAddon
						children='Name'
						minW={'5rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='text'
						focusBorderColor='teal.500'
						disabled={isSubmitted}
					/>
				</InputGroup>
				<InputGroup mb={'1rem'}>
					<InputLeftAddon
						children='Role'
						minW={'5rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='text'
						focusBorderColor='teal.500'
						disabled={isSubmitted}
					/>
				</InputGroup>
				<InputGroup mb={'1rem'}>
					<InputLeftAddon
						children='Email'
						minW={'5rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='text'
						focusBorderColor='teal.500'
						disabled={isSubmitted}
					/>
				</InputGroup>
				<InputGroup mb={'1rem'}>
					<InputLeftAddon
						children='Wallet'
						minW={'5rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='text'
						focusBorderColor='teal.500'
						disabled={isSubmitted}
					/>
				</InputGroup>
				<InputGroup mb={'1rem'}>
					<InputLeftAddon
						children='Avatar'
						minW={'5rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='file'
						border={'none'}
						focusBorderColor='teal.500'
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
	);
}
