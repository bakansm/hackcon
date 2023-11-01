import { ChevronDownIcon } from '@chakra-ui/icons';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	VStack,
} from '@chakra-ui/react';

export default function ViewSubmmitedProjectTab() {
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
						<VStack spacing={'1rem'}>
							<Button>View detail</Button>
							<Menu>
								<MenuButton
									as={Button}
									rightIcon={<ChevronDownIcon />}
									variant={'outline'}
								>
									Score
								</MenuButton>
								<MenuList>
									<MenuItem>1</MenuItem>
									<MenuItem>2</MenuItem>
									<MenuItem>3</MenuItem>
									<MenuItem>4</MenuItem>
									<MenuItem>5</MenuItem>
									<MenuItem>6</MenuItem>
									<MenuItem>7</MenuItem>
									<MenuItem>8</MenuItem>
									<MenuItem>9</MenuItem>
									<MenuItem>10</MenuItem>
								</MenuList>
							</Menu>
						</VStack>
					</CardFooter>
				</Card>
			))}
		</VStack>
	);
}
