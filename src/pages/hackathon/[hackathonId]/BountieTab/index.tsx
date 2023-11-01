import {
	Box,
	Center,
	Divider,
	Heading,
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from '@chakra-ui/react';
import TrackSection from './TrackSection';
import { dataList } from '../../../../data/fakedata';

const tabList = [
	'Near Foundation',
	'Polkadot Network',
	'Proximity Labs',
	'Ref Finance',
];

const pool: number = 118000;

export default function BountieTab() {
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			gap={'1rem'}
		>
			{/* Total Pool */}
			<Center
				display={'flex'}
				flexDirection={'column'}
				bg={'blackAlpha.800'}
				borderRadius={'xl'}
				paddingY={'2rem'}
			>
				<Text
					color={'gold'}
					textTransform={'uppercase'}
					fontSize={'5xl'}
					fontWeight={'black'}
				>
					Prize Pool
				</Text>
				<Text
					color={'whiteAlpha.900'}
					textTransform={'uppercase'}
					fontSize={'4xl'}
					fontWeight={'black'}
				>
					${pool.toLocaleString()}
				</Text>
			</Center>

			{/* Sponsor Pool */}
			<Tabs
				position='relative'
				variant='unstyled'
			>
				<TabList>
					{tabList.map((tab, key) => (
						<Tab
							key={key}
							as={'h4'}
							fontSize={'md'}
							fontWeight={'bold'}
						>
							{tab}
						</Tab>
					))}
				</TabList>
				<TabIndicator
					height='2px'
					bg='teal'
					borderRadius='1px'
				/>
				<TabPanels>
					{dataList.map((data, key) => (
						<TabPanel key={key}>
							<Heading
								as={'h4'}
								size={'lg'}
							>
								{data.sponsor}
							</Heading>
							<Text
								fontSize={'2xl'}
								fontWeight={'bold'}
								color={'blackAlpha.600'}
							>
								${data.pool.toLocaleString()}
							</Text>
							<VStack spacing={'1rem'}>
								{data.trackList.map((track, key) => (
									<div key={key}>
										<Divider />
										<TrackSection
											title={track.title}
											description={track.description}
											prizeList={track.prizeList}
										/>
									</div>
								))}
							</VStack>
						</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		</Box>
	);
}
