import JudgeCard from '@/components/lib/JudgeCard';
import { Grid, GridItem, Wrap } from '@chakra-ui/react';

export default function JudgeTab() {
	return (
		<Grid
			templateColumns={'repeat(4, 1fr)'}
			gap={'1rem'}
		>
			{[...Array(12)].map((_, key) => (
				<GridItem key={key}>
					<JudgeCard />
				</GridItem>
			))}
		</Grid>
	);
}
