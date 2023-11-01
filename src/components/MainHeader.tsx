import { useSignInRedirect } from '@/hooks/useSignInRedirect';
import { useAuthStore } from '@/stores/auth';
import { Text } from './lib/Text';
import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Container,
	Flex,
	Heading,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const MainHeader = () => {
	const signedIn = useAuthStore((store) => store.signedIn);
	const accountId = useAuthStore((store) => store.accountId);
	const logOut = useAuthStore((store) => store.logOut);
	const { requestAuthentication } = useSignInRedirect();
	const router = useRouter();

	return (
		<Center height={'84px'}>
			<Container
				maxW={'1440px'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<Box
					display={'flex'}
					gap={'2rem'}
				>
					<Heading textTransform={'uppercase'}>hackcon</Heading>

					<Flex gap={'1rem'}>
						<Button
							variant={'link'}
							onClick={() => router.push('/')}
						>
							Home
						</Button>
						<Button
							variant={'link'}
							onClick={() => router.push('/')}
						>
							Blog
						</Button>
						<Button
							variant={'link'}
							onClick={() => router.push('/')}
						>
							Event
						</Button>
						<Button
							variant={'link'}
							onClick={() => router.push('/hackathon')}
						>
							Hackathon
						</Button>
					</Flex>
				</Box>

				{signedIn ? (
					<>
						<Text>{accountId}</Text>
						<button
							type='button'
							onClick={logOut}
						>
							Log Out
						</button>
					</>
				) : (
					<ButtonGroup gap={'1'}>
						<Button
							type='button'
							onClick={() => requestAuthentication(true)}
						>
							Create Account
						</Button>
						<Button
							type='button'
							colorScheme='teal'
							onClick={() => requestAuthentication()}
						>
							Sign In
						</Button>
					</ButtonGroup>
				)}
			</Container>
		</Center>
	);
};
