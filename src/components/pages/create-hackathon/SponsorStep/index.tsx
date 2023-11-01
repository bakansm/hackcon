import React, { ReactElement, useState } from 'react';
import {
	Center,
	Heading,
	IconButton,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import SponsorCard from './SponsorCard';
import { AddIcon } from '@chakra-ui/icons';

export default function SponsorStep() {
	const [sponsorCards, setSponsorCards] = useState<ReactElement[]>([]);

	const addSponsorCard = () => {
		setSponsorCards([
			...sponsorCards,
			<SponsorCard key={sponsorCards.length} />,
		]);
	};

	return (
		<Center>
			<VStack spacing='1rem'>
				<Heading size={'lg'}>Add sponsor</Heading>
				<Wrap
					spacing={'1rem'}
					justify={'center'}
				>
					{sponsorCards.map((card, index) => (
						<WrapItem key={index}>{card}</WrapItem>
					))}
				</Wrap>
				<IconButton
					variant={'outline'}
					onClick={addSponsorCard}
					aria-label='add'
				>
					<AddIcon />
				</IconButton>
			</VStack>
		</Center>
	);
}
