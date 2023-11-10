import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
	useDisclosure,
} from '@chakra-ui/react';
import TrackSection from './TrackSection';
import { Key, useEffect, useState } from 'react';
import { viewDepositPool } from '@/contract';
import DepositModal from './DepositModal';

export default function BountieTab({ data }: { data: any }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [hasPermission, setHasPermisson] = useState<boolean>(true);
	const [sponsedNear, setSponsedNear] = useState<number>(0);

	useEffect(() => {
		const nearWallet = JSON.parse(
			localStorage.getItem('near_app_wallet_auth_key') as string,
		);
		for (const obj of data) {
			if (obj.sponsor_name === nearWallet.accountId) {
				setHasPermisson(true);
			}
		}
		const getSponsedNear = async () => {
			const result = await viewDepositPool();
			setSponsedNear(result[0].prizes);
		};

		getSponsedNear();
	}, [data]);

	return (
		<>
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
						sadadasdsdasdasd
					</Text>
				</Center>

				{/* Sponsor Pool */}
				<Tabs
					position='relative'
					variant='unstyled'
				>
					<TabList>
						{data.map((tab: any, key: Key) => (
							<Tab
								key={key}
								as={'h4'}
								fontSize={'md'}
								fontWeight={'bold'}
							>
								{tab.sponsor_name}
							</Tab>
						))}
					</TabList>
					<TabIndicator
						height='2px'
						bg='teal'
						borderRadius='1px'
					/>
					<TabPanels>
						{data.map((sponsor: any, key: Key) => (
							<TabPanel key={key}>
								<VStack
									align={'flex-start'}
									w={'100%'}
								>
									<Flex
										justify={'space-between'}
										width={'100%'}
									>
										<Heading
											as={'h4'}
											size={'lg'}
										>
											{sponsor.sponsor_name}
										</Heading>
										{hasPermission && (
											<Button
												colorScheme='teal'
												onClick={onOpen}
											>
												Deposit
											</Button>
										)}
									</Flex>
									<Flex
										justify={'space-between'}
										w={'100%'}
									>
										<Text
											fontSize={'2xl'}
											fontWeight={'bold'}
											color={'blackAlpha.600'}
										>
											{sponsor.prize_pool.toLocaleString()}{' '}
											NEAR
										</Text>
										<Text
											fontSize={'lg'}
											fontWeight={'bold'}
											color={'blackAlpha.800'}
										>
											Sponsed: {sponsedNear} NEAR
										</Text>
									</Flex>
								</VStack>
								<VStack
									spacing={'1rem'}
									justify={'stretch'}
								>
									{sponsor.track.map(
										(track: any, key: Key) => (
											<TrackSection
												key={key}
												title={track.track_name}
												description={track.description}
												prizeList={track.prizes}
											/>
										),
									)}
								</VStack>
							</TabPanel>
						))}
					</TabPanels>
				</Tabs>
			</Box>
			<DepositModal
				isOpen={isOpen}
				onClose={onClose}
			/>
		</>
	);
}
