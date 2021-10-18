import { useEffect } from 'react';
import AnimationRevealPage from '../Helpers/AnimationRevealPage';
import Header from 'components/Header/light';
import FAQ from 'components/Faqs/SingleCol';
import Product from 'components/Products/Product';

export default () => {
	useEffect(() => {
		document.title = 'System | Pricing';

		return () => null;
	}, []);
	return (
		<AnimationRevealPage>
			<Header hiddenLink='download' />
			<Product />
			<FAQ />
		</AnimationRevealPage>
	);
};
