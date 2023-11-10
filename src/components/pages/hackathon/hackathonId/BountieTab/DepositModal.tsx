import { depositToPool } from '@/contract';
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

export default function DepositModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const [depositValue, setDepositValue] = useState<string>();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setDepositValue(event.target.value);
	};

	const handleClick = async () => {
		if (depositValue) {
			await depositToPool(depositValue);
		}
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<ModalCloseButton />
				</ModalHeader>
				<ModalBody mt={'1rem'}>
					<Input
						type='number'
						placeholder='Deposit Value'
						value={depositValue}
						onChange={handleChange}
					/>
				</ModalBody>
				<ModalFooter>
					<Button
						colorScheme='teal'
						onClick={handleClick}
					>
						Deposit
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
