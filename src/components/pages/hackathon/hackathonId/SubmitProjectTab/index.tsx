import {
	Badge,
	Box,
	Button,
	Flex,
	FormLabel,
	HStack,
	Input,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type Project = {
	description: string;
	solution: string;
	projectImage: string;
	challenges: string;
	technologies: string[];
	projectVideo: string;
	projectPresentation: string;
	externalLink: string;
};

export default function SubmitProjectTab() {
	const [technologiesUsed, setTechnologiesUsed] = useState<string[]>([]);
	const [technology, setTechnology] = useState<string>('');
	const { register, handleSubmit, resetField } = useForm<Project>();
	const onSubmit: SubmitHandler<Project> = (data) => {
		console.log(data);
	};
	const addTechnology = () => {
		setTechnologiesUsed([...technologiesUsed, technology]);
		resetField('technologies');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<VStack
				spacing={'2rem'}
				align={'stretch'}
				mb={'2rem'}
			>
				<Box>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Short description
					</FormLabel>
					<Textarea
						h={'5rem'}
						resize={'none'}
						{...register('description', {
							required: true,
							max: 300,
						})}
					/>
				</Box>
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
						{...register('solution', { required: true })}
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
						w={'min-content'}
						{...register('projectImage', { required: true })}
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
						{...register('challenges', {
							required: true,
							max: 600,
						})}
					/>
				</Box>
				<Flex direction={'column'}>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Technologies used
					</FormLabel>
					{technologiesUsed[0] && (
						<HStack
							spacing={'1rem'}
							mb={'1rem'}
						>
							{technologiesUsed.map((technology, key) => (
								<Badge
									key={key}
									fontSize={'xs'}
									rounded={'full'}
									py={'0.25rem'}
									px={'1rem'}
								>
									{technology}
								</Badge>
							))}
						</HStack>
					)}
					<HStack spacing={'1rem'}>
						<Input
							w={'10rem'}
							{...register('technologies', {
								required: true,
							})}
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
					<Input
						type='text'
						{...register('projectVideo')}
					/>
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
						w={'min-content'}
						{...register('projectPresentation')}
					/>
				</Box>
				<Box>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						External Link
					</FormLabel>
					<Input
						type='text'
						{...register('externalLink')}
					/>
				</Box>
				<Flex justify={'center'}>
					<Button
						variant={'solid'}
						colorScheme='teal'
						w={'min-content'}
						type='submit'
					>
						Submit
					</Button>
				</Flex>
			</VStack>
		</form>
	);
}
