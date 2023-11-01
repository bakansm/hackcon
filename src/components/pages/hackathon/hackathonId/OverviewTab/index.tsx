import {
	Box,
	Center,
	Heading,
	StackDivider,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import DescriptionSection from './DescriptionSection';

const sponsorList = [
	'NEAR Foundation',
	'Polkadot Network',
	'Proximity Labs',
	'Ref Finance',
];

export default function OverviewTab() {
	return (
		<VStack
			divider={<StackDivider borderColor='gray.200' />}
			spacing={4}
			align='stretch'
		>
			<DescriptionSection />
			<Box>
				<Heading
					textTransform={'uppercase'}
					as={'h2'}
					size={'lg'}
					color={'blackAlpha.600'}
				>
					sponsor
				</Heading>
				<Wrap spacing={'2rem'}>
					{sponsorList.map((sponsor, key) => (
						<WrapItem
							key={key}
							p={'3rem'}
							width={'min-content'}
							bg={'white'}
							boxShadow={'lg'}
							border={'1px'}
							borderColor={'teal'}
							borderRadius={'lg'}
							display={'flex'}
							alignItems={'center'}
							justifyContent={'center'}
						>
							<Center
								whiteSpace={'nowrap'}
								fontWeight={'bold'}
							>
								{sponsor}
							</Center>
						</WrapItem>
					))}
				</Wrap>
			</Box>
			<Box>
				<Heading
					textTransform={'uppercase'}
					as={'h2'}
					size={'lg'}
					color={'blackAlpha.600'}
				>
					hacker review
				</Heading>
			</Box>
			<Box>
				<Heading
					textTransform={'uppercase'}
					as={'h2'}
					size={'lg'}
					color={'blackAlpha.600'}
				>
					hacker feedback
				</Heading>
			</Box>
		</VStack>
	);
}
