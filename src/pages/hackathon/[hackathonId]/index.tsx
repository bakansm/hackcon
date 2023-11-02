import {
	Box,
	Button,
	Container,
	Grid,
	GridItem,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDefaultLayout } from '@/hooks/useLayout';
import SubmitProjectTab from '@/components/pages/hackathon/hackathonId/SubmitProjectTab';
import DiscussTab from '@/components/pages/hackathon/hackathonId/DiscussTab';
import ScheduleTab from '@/components/pages/hackathon/hackathonId/ScheduleTab';
import BountieTab from '@/components/pages/hackathon/hackathonId/BountieTab';
import JudgeTab from '@/components/pages/hackathon/hackathonId/JudgeTab';
import OverviewTab from '@/components/pages/hackathon/hackathonId/OverviewTab';
import SubmmitedProjectTab from '@/components/pages/hackathon/hackathonId/SubmmitedProjectTab';

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
			case 'submit-project':
				return <SubmitProjectTab />;
			case 'submitted-project':
				return <SubmmitedProjectTab />;
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
						position={'sticky'}
						top={'1rem'}
						left={0}
					>
						<VStack spacing={'1rem'}>
							<Box
								w={'100%'}
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
										colorScheme={`${
											selectedTab === tab
												? 'teal'
												: 'blackAlpha'
										}`}
										onClick={() => selectTab(tab)}
										py={'1.5rem'}
									>
										{tab}
									</Button>
								))}
							</Box>
							<Button
								textTransform={'uppercase'}
								variant={'solid'}
								colorScheme='teal'
								onClick={() => selectTab('submit-project')}
								py={'1.5rem'}
								w={'100%'}
							>
								Submit project
							</Button>
							<Button
								textTransform={'uppercase'}
								variant={'outline'}
								colorScheme='teal'
								onClick={() => selectTab('submitted-project')}
								py={'1.5rem'}
								w={'100%'}
							>
								View submitted project
							</Button>
						</VStack>
					</Box>
				</GridItem>
				<GridItem colSpan={4}>{renderTab(selectedTab)}</GridItem>
			</Grid>
		</Container>
	);
}

HackathonDetail.getLayout = useDefaultLayout;
