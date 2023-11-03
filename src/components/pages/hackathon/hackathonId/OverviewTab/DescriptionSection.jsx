import { VmComponent } from '@/components/vm/VmComponent';

export default function DescriptionSection() {
	const code = `return (<Markdown text={'# Render markdown overview content here'} />)`;

	return (
		<VmComponent
			src='near/widget/DIG.Theme'
			props={{ children: <VmComponent code={code} /> }}
		/>
	);
}
