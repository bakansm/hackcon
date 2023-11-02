import { useDefaultLayout } from '@/hooks/useLayout';

export default function HomePage() {
	return (
		<>
			<div>Home Page</div>
		</>
	);
}

HomePage.getLayout = useDefaultLayout;
