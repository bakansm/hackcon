import { useDefaultLayout } from '@/hooks/useLayout';
import { Button, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Hackathon() {
	const router = useRouter();

	return (
		<Container maxW={'1440px'}>
			<Button
				onClick={() => router.push('create-hackathon')}
				variant={'solid'}
				colorScheme='teal'
			>
				Create hackathon
			</Button>
		</Container>
	);
}

Hackathon.getLayout = useDefaultLayout;
