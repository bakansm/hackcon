import { VmComponent } from '@/components/vm/VmComponent';
import { Box, Heading } from '@chakra-ui/react';

export default function DescriptionSection() {
	return (
		<Box>
			<VmComponent
				src='discom.testnet/widget/DIG.Theme'
				props={{
					children: (
						<VmComponent
							code={`return (<Markdown text={'#Hello'}/>`}
						/>
					),
				}}
			/>
			{/* <VmComponent src='mob.near/widget/MarkdownEditorIframeExample' /> */}
		</Box>
	);
}
