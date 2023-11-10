import { VmComponent } from '@/components/vm/VmComponent';
import { useState } from 'react';

export default function SocialPost({
	saveData,
}: {
	saveData: (message: any) => void;
}) {
	return (
		<>
			<VmComponent
				src='toch.near/widget/SocialPost'
				props={{ saveData: saveData }}
			/>
		</>
	);
}
