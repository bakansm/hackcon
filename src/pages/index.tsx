import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

export default function HomePage() {
	return <div>Home Page</div>;
}

HomePage.getLayout = useDefaultLayout;
