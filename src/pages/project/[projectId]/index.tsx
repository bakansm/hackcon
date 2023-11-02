import BOSTab from '@/components/pages/project/projectId/BOSTab';
import OverviewTab from '@/components/pages/project/projectId/OverviewTab';
import ScoreSubmitForm from '@/components/pages/project/projectId/ScoreSubmitForm';
import TeamTab from '@/components/pages/project/projectId/TeamTab';
import { useDefaultLayout } from '@/hooks/useLayout';
import { TriangleDownIcon, TriangleUpIcon, ViewIcon } from '@chakra-ui/icons';
import {
	Button,
	Container,
	Flex,
	HStack,
	Heading,
	IconButton,
	Image,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
	useDisclosure,
} from '@chakra-ui/react';

const tabList = ['overview', 'bos view', 'team'];

export default function ProjectDetail() {
	const renderTab = (tab: string) => {
		switch (tab) {
			case 'overview':
				return <OverviewTab />;
			case 'bos view':
				return <BOSTab />;
			case 'team':
				return <TeamTab />;
			default:
				break;
		}
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Container maxW={'1440px'}>
			<VStack
				align={'stretch'}
				spacing={'2rem'}
				mt={'5rem'}
			>
				<Flex
					gap={'2rem'}
					justify={'space-between'}
				>
					<HStack
						spacing={'1rem'}
						align={'stretch'}
					>
						<Image
							src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
							alt='Judge'
							borderRadius='lg'
							w={100}
							h={100}
						/>
						<Flex
							direction={'column'}
							justify={'center'}
						>
							<Flex gap={'1rem'}>
								<Heading
									size={'2xl'}
									p={0}
									m={0}
								>
									OraSci
								</Heading>
								<Flex
									gap={'.5rem'}
									color={'blackAlpha.700'}
									border={'1px'}
									borderColor={'blackAlpha.700'}
									w={'fit-content'}
									py={'.25rem'}
									px={'1rem'}
									borderRadius={'lg'}
									h={'fit-content'}
								>
									<ViewIcon boxSize={6} />
									<Text
										m={0}
										p={0}
									>
										130
									</Text>
								</Flex>
							</Flex>
							<Text
								p={0}
								m={0}
								fontSize={'xl'}
								color={'blackAlpha.600'}
							>
								The first Decentralized Science building on Near
								Protocol
							</Text>
						</Flex>
					</HStack>
					<Flex gap={'1rem'}>
						<VStack
							justify={'center'}
							spacing={0}
						>
							<Button
								variant={'solid'}
								colorScheme={'teal'}
								onClick={onOpen}
							>
								Submit Score
							</Button>
						</VStack>
						<VStack
							justify={'space-between'}
							spacing={0}
						>
							<IconButton
								variant={'ghost'}
								aria-label='up'
							>
								<TriangleUpIcon />
							</IconButton>
							<Text
								p={0}
								m={0}
							>
								10
							</Text>
							<IconButton
								variant={'ghost'}
								aria-label='down'
							>
								<TriangleDownIcon />
							</IconButton>
						</VStack>
					</Flex>
				</Flex>
				<Tabs
					isFitted
					variant='enclosed'
					colorScheme='teal'
					borderColor={'teal'}
				>
					<TabList mb='1em'>
						{tabList.map((tab, key) => (
							<Tab key={key}>
								<Heading
									p={'.5rem'}
									size={'sm'}
									m={0}
									textTransform={'uppercase'}
								>
									{tab}
								</Heading>
							</Tab>
						))}
					</TabList>
					<TabPanels>
						{tabList.map((tab, key) => (
							<TabPanel key={key}>{renderTab(tab)}</TabPanel>
						))}
					</TabPanels>
				</Tabs>
			</VStack>

			<ScoreSubmitForm
				isOpen={isOpen}
				onClose={onClose}
			/>
		</Container>
	);
}

ProjectDetail.getLayout = useDefaultLayout;
