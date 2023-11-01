import {
	Button,
	Card,
	FormControl,
	Input,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function SponsorCard() {
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
						children='Sponsor name'
						minW={'10rem'}
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
						children='Prize pool'
						minW={'10rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='number'
						focusBorderColor='teal.500'
						disabled={isSubmitted}
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
						disabled={isSubmitted}
					/>
				</InputGroup>
				<InputGroup mb={'1rem'}>
					<InputLeftAddon
						children='Logo image'
						minW={'10rem'}
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
