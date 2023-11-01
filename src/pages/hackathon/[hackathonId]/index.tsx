import { Box, Button, Container, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import OverviewTab from '../../../components/pages/hackathon/hackathonId/OverviewTab';
import JudgeTab from '../../../components/pages/hackathon/hackathonId/JudgeTab';
import ScheduleTab from '../../../components/pages/hackathon/hackathonId/ScheduleTab';
import DiscussTab from '../../../components/pages/hackathon/hackathonId/DiscussTab';
import { useDefaultLayout } from '@/hooks/useLayout';
import BountieTab from '../../../components/pages/hackathon/hackathonId/BountieTab';

const tabList = ['overview', 'judge', 'bountie', 'schedule', 'discuss'];

export default function HackathonDetail() {
	const [selectedTab, setSelectedTab] = useState<string>('overview');

	const selectTab = (tab: string) => {
		setSelectedTab(tab);
	};

	const renderTab = (tab: string) => {
		switch (tab) {
			case 'overview':
				return <OverviewTab />;
			case 'judge':
				return <JudgeTab />;
			case 'bountie':
				return <BountieTab />;
			case 'schedule':
				return <ScheduleTab />;
			case 'discuss':
				return <DiscussTab />;
			default:
				break;
		}
	};

	return (
		<Container maxW={'1440px'}>
			<Grid
				templateColumns={'repeat(5, 1fr)'}
				gap={'1rem'}
			>
				<GridItem colSpan={1}>
					<Box
						display={'flex'}
						flexDirection={'column'}
						gap={'4px'}
						borderRadius={'base'}
						boxShadow={'base'}
						p={'1rem'}
					>
						{tabList.map((tab, key) => (
							<Button
								key={key}
								textTransform={'uppercase'}
								variant={'ghost'}
								onClick={() => selectTab(tab)}
								py={'1.5rem'}
							>
								{tab}
							</Button>
						))}
					</Box>
				</GridItem>
				<GridItem colSpan={4}>{renderTab(selectedTab)}</GridItem>
			</Grid>
		</Container>
	);
}

HackathonDetail.getLayout = useDefaultLayout;
