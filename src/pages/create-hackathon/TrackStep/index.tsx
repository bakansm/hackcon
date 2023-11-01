import React, { useState } from 'react';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	VStack,
} from '@chakra-ui/react';
import TrackCard from './TrackCard';
import { AddIcon } from '@chakra-ui/icons';

const titleList = [
	'Near Foundation',
	'Priximity Labs',
	'Polkadot Network',
	'Ref Finance',
];

type TrackCardCounts = { [key: string]: number };

export default function TrackStep() {
	const [trackCardCounts, setTrackCardCounts] = useState<TrackCardCounts>({});

	const handleAddTrack = (title: string) => {
		setTrackCardCounts({
			...trackCardCounts,
			[title]: (trackCardCounts[title] || 0) + 1,
		});
	};

	return (
		<VStack spacing={'1rem'}>
			<Accordion
				allowToggle
				w={'100%'}
			>
				{titleList.map((title, key) => (
					<AccordionItem key={key}>
						<AccordionButton>
							<Box
								as='span'
								flex='1'
								textAlign='left'
								fontWeight={'semibold'}
								fontSize={'xl'}
							>
								{title}
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							<VStack
								spacing={'1rem'}
							>
								{Array(trackCardCounts[title] || 0)
									.fill(null)
									.map((_, index) => (
										<TrackCard key={index} />
									))}
							</VStack>
							<Button
								mt={'1rem'}
								variant={'outline'}
								colorScheme={'blackAlpha'}
								py={0}
								onClick={() => handleAddTrack(title)}
							>
								<AddIcon mr={'.5rem'} /> Add track
							</Button>
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</VStack>
	);
}
