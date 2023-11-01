import React, { ReactElement, useState } from 'react';
import {
	Center,
	Heading,
	IconButton,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import JudgeCard from './JudgeCard';

export default function SponsorStep() {
	const [judgeCards, setJudgeCards] = useState<ReactElement[]>([]);

	const addSponsorCard = () => {
		setJudgeCards([...judgeCards, <JudgeCard key={judgeCards.length} />]);
	};

	return (
		<Center>
			<VStack spacing='1rem'>
				<Heading size={'lg'}>Add Judge</Heading>
				<Wrap
					spacing={'1rem'}
					justify={'center'}
				>
					{judgeCards.map((card, index) => (
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
