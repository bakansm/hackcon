import {
	Badge,
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

export default function SubmitProjectTab() {
	const [technologiesUsed, setTechnologiesUsed] = useState<string[]>([]);
	const [technology, setTechnology] = useState<string>('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTechnology(event.target.value);
	};

	const addTechnology = () => {
		setTechnologiesUsed([...technologiesUsed, technology]);
	};

	return (
		<FormControl>
			<VStack
				spacing={'2rem'}
				align={'stretch'}
			>
				<Box>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						What is your solution
					</FormLabel>
					<Textarea
						h={'20rem'}
						resize={'none'}
					/>
				</Box>
				<Box>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your project image
					</FormLabel>
					<Input
						type='file'
						border={'none'}
					/>
				</Box>
				<Box>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						The challenges you have faced
					</FormLabel>
					<Textarea
						h={'10rem'}
						resize={'none'}
					/>
				</Box>
				<Flex
					direction={'column'}
					gap={'1rem'}
				>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Technologies used
					</FormLabel>
					<HStack spacing={'1rem'}>
						{technologiesUsed.map((technology, key) => (
							<Badge
								key={key}
								fontSize={'sm'}
								padding={'.5rem'}
							>
								{technology}
							</Badge>
						))}
					</HStack>
					<HStack spacing={'1rem'}>
						<Input
							w={'10rem'}
							onChange={handleChange}
							value={technology}
						/>
						<Button
							variant={'ghost'}
							colorScheme='teal'
							onClick={addTechnology}
						>
							Add
						</Button>
					</HStack>
				</Flex>
				<Box>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your project video link
					</FormLabel>
					<Input type='text' />
				</Box>
				<Box>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your project presentation file
					</FormLabel>
					<Input
						type='file'
						border={'none'}
					/>
				</Box>
				<Box>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						External Link
					</FormLabel>
					<Input type='text' />
				</Box>
				<Button
					variant={'solid'}
					colorScheme='teal'
				>
					Submit
				</Button>
			</VStack>
		</FormControl>
	);
}
