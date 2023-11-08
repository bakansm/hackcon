import { useDefaultLayout } from '@/hooks/useLayout';
import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Flex,
	Heading,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function HomePage() {
	return (
		<Center
			width={'full'}
			height={'prose'}
			flexDirection={'column'}
			gap={'2rem'}
		>
			<Box>
				<Heading
					size={'2xl'}
					textAlign={'center'}
				>
					Welcome to
				</Heading>
				<Flex
					justify={'center'}
					mb={'1rem'}
				>
					<Image
						src={'/logo-text.svg'}
						alt='logo-text'
						width={400}
						height={160}
					/>
				</Flex>
				<Heading
					size={'lg'}
					textAlign={'center'}
				>
					The All-In-One Transparency Hackathon Platform
				</Heading>
			</Box>
			<ButtonGroup>
				<Button
					size={'lg'}
					colorScheme='teal'
				>
					Create a hackthon
				</Button>
				<Button
					size={'lg'}
					colorScheme='teal'
					variant={'outline'}
				>
					Join a hackathon
				</Button>
			</ButtonGroup>
		</Center>
	);
}

HomePage.getLayout = useDefaultLayout;
