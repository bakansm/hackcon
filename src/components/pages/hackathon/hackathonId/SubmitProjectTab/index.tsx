import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
	Badge,
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	IconButton,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import fs from 'fs';

export type Project = {
	project_name: string;
	short_description: string;
	solution: string;
	project_image: any[];
	challenges: string;
	bos_link: string;
	technologies: string[];
	video_link: string;
	presentation_file: any;
	external_link: string[];
	hackathon_id: string;
	team_name: string;
};

export default function SubmitProjectTab({ data }: { data: any }) {
	const [technologiesUsed, setTechnologiesUsed] = useState<string[]>([]);
	const [technology, setTechnology] = useState<string>('');
	const { register, handleSubmit } = useForm<Project>();
	const [externalLink, setExternalLink] = useState<string>('');
	const [trackList, setTrackList] = useState<string[]>([]);
	const [submitTrack, setSubmitTrack] = useState<string>('Submit track');
	const router = useRouter();
	const { hackathonId } = router.query;

	const handleExternalLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
		setExternalLink(event.target.value);
	};

	const handleTechnologyChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTechnology(event.target.value);
	};

	const onSubmit: SubmitHandler<Project> = async (data) => {
		console.log(
			JSON.stringify({
				...data,
				track_id: submitTrack,
				technologies: technologiesUsed,
				external_link: externalLink,
				hackathon_id: hackathonId,
			}),
		);
		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: `${process.env.API_URL}/api/user/submit-project`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify({
				...data,
				track_id: submitTrack,
				technologies: technologiesUsed,
				external_link: externalLink,
				hackathon_id: hackathonId,
			}),
		};

		await axios
			.request(config)
			.then((response) => console.log(response.data))
			.catch((error) => {
				console.log(error);
			});
	};
	const addTechnology = () => {
		setTechnologiesUsed([...technologiesUsed, technology]);
	};

	useEffect(() => {
		if (data) {
			const temp = [...trackList];
			for (const sponsor of data) {
				for (const track of sponsor.track) {
					temp.push(track.track_name);
				}
			}
			setTrackList(temp);
		}
	}, [data]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<VStack
				spacing={'2rem'}
				align={'stretch'}
				mb={'2rem'}
			>
				<Menu>
					<MenuButton
						as={Button}
						rightIcon={<ChevronDownIcon />}
						w={'min-content'}
					>
						{submitTrack}
					</MenuButton>
					<MenuList>
						{trackList.map((track, key) => (
							<MenuItem
								key={key}
								onClick={() => setSubmitTrack(track)}
							>
								{track}
							</MenuItem>
						))}
					</MenuList>
				</Menu>
				<FormControl isRequired>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Team name
					</FormLabel>
					<Input
						{...register('team_name', {
							required: true,
							max: 300,
						})}
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Project Name
					</FormLabel>
					<Input
						{...register('project_name', {
							required: true,
							max: 300,
						})}
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Short description
					</FormLabel>
					<Textarea
						h={'5rem'}
						resize={'none'}
						{...register('short_description', {
							required: true,
							max: 300,
						})}
					/>
				</FormControl>
				<FormControl isRequired>
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
				</FormControl>
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your project image
					</FormLabel>
					<Input
						type='text'
						w={'min-content'}
						{...register('project_image')}
					/>
				</FormControl>
				<FormControl>
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
							max: 600,
						})}
					/>
				</FormControl>
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
							onChange={handleTechnologyChange}
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
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your project video link
					</FormLabel>
					<Input
						type='text'
						{...register('video_link')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your BOS link
					</FormLabel>
					<Input
						type='text'
						{...register('bos_link')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						Your project presentation file
					</FormLabel>
					<Input
						type='text'
						w={'min-content'}
						value={'0x654c67414f55312340c4dfe18e98'}
						{...register('presentation_file')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel
						fontSize={'xl'}
						fontWeight={'bold'}
					>
						External Link
					</FormLabel>
					<VStack
						spacing={'1rem'}
						mb={'0.5rem'}
					>
						<Input
							type='text'
							onChange={handleExternalLinkChange}
						/>
					</VStack>
					<IconButton aria-label='add-btn'>
						<AddIcon />
					</IconButton>
				</FormControl>
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
