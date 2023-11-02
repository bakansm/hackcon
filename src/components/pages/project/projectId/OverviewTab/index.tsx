import {
	Badge,
	Box,
	Button,
	Divider,
	Flex,
	HStack,
	Heading,
	ListItem,
	Text,
	Textarea,
	UnorderedList,
	VStack,
} from '@chakra-ui/react';

const technologiesList = ['bos', 'rust', 'near protocol', 'smart contract'];

export default function OverviewTab() {
	return (
		<VStack
			spacing={'2rem'}
			align={'stretch'}
		>
			<Box>
				<Heading size={'lg'}>Summary</Heading>
				<Box>
					<Heading size={'md'}>Problems</Heading>
					<Text
						fontSize={'lg'}
						color={'blackAlpha.700'}
						textAlign={'justify'}
					>
						Scientific research is a vital activity that drives
						societal development. However, the current scientific
						system faces numerous challenges that impact researchers
						themselves and hinder access to academic environments at
						certain universities. Attracting research funding
						encounters various difficulties due to several reasons.
						One of the reasons is the competitive nature of writing
						funding proposals. This process can demand a significant
						amount of time and effort to complete and may not always
						yield successful results, causing distractions for
						researchers as they focus on financial matters. In
						addition to funding, restricted access to scientific
						information is another significant challenge affecting
						modern science. With private databases and controlled
						subscription-based websites, a large portion of
						scientific data remains inaccessible to the public,
						especially students and independent researchers
					</Text>
				</Box>
				<Box>
					<Heading size={'md'}>Solution</Heading>
					<Text
						fontSize={'lg'}
						color={'blackAlpha.700'}
						textAlign={'justify'}
					>
						Evaluating scientific articles also faces difficulties
						for various reasons. One of the primary reasons is the
						challenge of finding reviewers, and their efforts often
						go unrecognized or are inadequately compensated.
						Additionally, the evaluation process can be complex and
						lack proper organization. Sharing data and research
						methods can also be challenging due to issues of
						security, ownership rights, or concerns about data
						misinterpretation resulting from a lack of transparency
						in the publication of research findings.
					</Text>
				</Box>
			</Box>
			<Box>
				<Heading size={'lg'}>Challenges</Heading>
				<UnorderedList>
					<ListItem
						fontSize={'lg'}
						color={'blackAlpha.700'}
						textAlign={'justify'}
					>
						Design IP-NFT and IP-Token Protocol
					</ListItem>
					<ListItem
						fontSize={'lg'}
						color={'blackAlpha.700'}
						textAlign={'justify'}
					>
						Using BOS to build UX/UI
					</ListItem>
				</UnorderedList>
			</Box>
			<Box>
				<Heading size={'lg'}>Technologies Used</Heading>
				<HStack spacing={'1rem'}>
					{technologiesList.map((technology, key) => (
						<Badge
							key={key}
							py={'.5rem'}
							px={'1rem'}
						>
							{technology}
						</Badge>
					))}
				</HStack>
			</Box>
			<Box>
				<Heading size={'lg'}>Project Link</Heading>
				<UnorderedList>
					<ListItem
						fontSize={'lg'}
						color={'blackAlpha.700'}
						textAlign={'justify'}
					>
						<Button variant={'link'}>
							github.com/Orascie/MarketSci
						</Button>
					</ListItem>
					<ListItem
						fontSize={'lg'}
						color={'blackAlpha.700'}
						textAlign={'justify'}
					>
						<Button variant={'link'}>
							https://test.near.org/bakansm.testnet/widget/OraSci
						</Button>
					</ListItem>
					<ListItem
						fontSize={'lg'}
						color={'blackAlpha.700'}
						textAlign={'justify'}
					>
						<Button variant={'link'}>
							https://orasci.gitbook.io/orasci-marketplace/introduction/what-is-decentralized-science-desci
						</Button>
					</ListItem>
				</UnorderedList>
			</Box>
			<Divider borderColor={'teal'} />
			<VStack
				spacing={'.5rem'}
				align={'stretch'}
			>
				<Heading size={'md'}>Comment</Heading>
				<Textarea
					h={'5rem'}
					resize={'none'}
				/>
				<Flex
					gap={'.5rem'}
					justify={'flex-end'}
				>
					<Button
						variant={'ghost'}
						colorScheme='teal'
					>
						Cancel
					</Button>
					<Button colorScheme='teal'>Send</Button>
				</Flex>
			</VStack>
		</VStack>
	);
}
