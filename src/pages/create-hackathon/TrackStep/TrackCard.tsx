import { AddIcon } from '@chakra-ui/icons';
import {
	Button,
	Card,
	FormControl,
	Input,
	InputGroup,
	InputLeftAddon,
	Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function TrackCard() {
	const [prizes, setPrizes] = useState([
		<InputGroup
			key={0}
			mt={'1rem'}
		>
			<InputLeftAddon
				children='1st Prize'
				minW={'10rem'}
				fontWeight={'semibold'}
			/>
			<Input
				type='number'
				focusBorderColor='teal.500'
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
			/>
		</InputGroup>,
		<InputGroup
			key={1}
			mt={'1rem'}
		>
			<InputLeftAddon
				children='2nd Prize'
				minW={'10rem'}
				fontWeight={'semibold'}
			/>
			<Input
				type='number'
				focusBorderColor='teal.500'
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
			/>
		</InputGroup>,
		<InputGroup
			key={2}
			mt={'1rem'}
		>
			<InputLeftAddon
				children='3rd Prize'
				minW={'10rem'}
				fontWeight={'semibold'}
			/>
			<Input
				type='number'
				focusBorderColor='teal.500'
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
			/>
		</InputGroup>,
	]);

	const addPrizeField = () => {
		const newPrizeIndex = prizes.length + 1;
		setPrizes([
			...prizes,
			<InputGroup
				key={newPrizeIndex}
				mt={'1rem'}
			>
				<InputLeftAddon
					children={`${newPrizeIndex}th Prize`}
					minW={'10rem'}
					fontWeight={'semibold'}
				/>
				<Input
					type='number'
					focusBorderColor='teal.500'
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
				/>
			</InputGroup>,
		]);
	};

	return (
		<Card
			p='1rem'
			w={'100%'}
		>
			<FormControl>
				<InputGroup>
					<InputLeftAddon
						children='Track name'
						minW={'10rem'}
						fontWeight={'semibold'}
					/>
					<Input
						type='text'
						mb={'1rem'}
						focusBorderColor='teal.500'
					/>
				</InputGroup>
				<InputGroup>
					<InputLeftAddon
						children='Description'
						minW={'10rem'}
						fontWeight={'semibold'}
					/>
					<Textarea focusBorderColor='teal.500' />
				</InputGroup>
				{prizes.map((prizeField, index) => (
					<div key={index}>{prizeField}</div>
				))}
				<Button
					mt={'1rem'}
					variant={'link'}
					colorScheme={'teal'}
					py={0}
					onClick={addPrizeField}
				>
					<AddIcon mr={'.5rem'} /> Add prize
				</Button>
			</FormControl>
		</Card>
	);
}
