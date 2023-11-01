import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import PrizeCard from './PrizeCard';

type Prize = {
	position: number;
	bountie: number;
	amount: number;
};

interface Track {
	title: string;
	description: string;
	prizeList: Prize[];
}

export default function TrackSection({ title, description, prizeList }: Track) {
	return (
		<Box mb={'3rem'}>
			<Heading
				as={'h5'}
				size={'md'}
			>
				{title}
			</Heading>
			<Text
				fontSize={'xl'}
				color={'blackAlpha.600'}
			>
				{description}
			</Text>
			<HStack spacing={4}>
				{prizeList.map((prize, key) => (
					<PrizeCard
						prize={prize}
						key={key}
					/>
				))}
			</HStack>
		</Box>
	);
}
