import { viewResult } from '@/contract';
import {
	Box,
	Divider,
	Flex,
	HStack,
	Heading,
	Text,
	VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ResultTab({ hackathonId }: { hackathonId: string }) {
	const [results, setResults] = useState<any[]>([]);

	const medalPath = (prizePosition: number) => {
		switch (prizePosition) {
			case 1:
				return '/icons/medal.png';
			case 2:
				return '/icons/medal2.png';
			case 3:
				return '/icons/medal3.png';
			default:
				return '/icons/medal4.png';
		}
	};

	useEffect(() => {
		const fetchResult = async () => {
			const res = await viewResult(hackathonId);
			setResults(res);
		};
		fetchResult();
	}, []);

	return (
		<VStack
			spacing={'2rem'}
			align={'stretch'}
		>
			<Box>
				<Heading size={'md'}>Track: {results[0]?.track_id}</Heading>
				<Divider />
				<HStack spacing={'5rem'}>
					{results?.map((result, key) => (
						<Flex gap={'1rem'}>
							<Box
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}
							>
								<Image
									src={medalPath(result.top_result)}
									alt='medal'
									width={64}
									height={64}
								/>
							</Box>
							<Box>
								<Heading
									size={'lg'}
									m={0}
									p={0}
								>
									Top {result.top_result}
								</Heading>
								<Text>Team: {result.attendee_id}</Text>
							</Box>
						</Flex>
					))}
				</HStack>
			</Box>
		</VStack>
	);
}
