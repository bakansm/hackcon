import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function SubmmitedProjectTab() {
	const router = useRouter();

	return (
		<VStack
			spacing={'1rem'}
			align={'stretch'}
		>
			{[...Array(6)].map((_, key) => (
				<Card
					key={key}
					direction={'row'}
				>
					<CardHeader>
						<Image
							src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
							alt='Judge'
							borderRadius='lg'
							w={100}
							h={100}
						/>
					</CardHeader>
					<CardBody>
						<Heading size={'lg'}>OraSci</Heading>
						<Text fontSize={'xl'}>
							The first Decentralized Science building on Near
							Protocol
						</Text>
					</CardBody>
					<CardFooter>
						<Button onClick={() => router.push('/project/dasfkj')}>
							View detail
						</Button>
					</CardFooter>
				</Card>
			))}
		</VStack>
	);
}
