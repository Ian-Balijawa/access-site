import { useEffect } from 'react';
import AnimationRevealPage from 'Helpers/AnimationRevealPage.js';
import Header from 'components/Header/light.js';
import FAQ from 'components/Faqs/SingleCol.js';
import Product from 'components/Products/Product';

export default () => {
	useEffect(() => {
		document.title = 'Product - Pricing';

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
