import { useEffect } from 'react';
import Header from '../components/Header/light';
import FAQ from '../components/Faqs/SingleCol';
import Product from '../components/Products/Product';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	useEffect(() => {
		document.title = 'System | Pricing';

		return () => null;
	}, []);
	return (
		<>
			<Header hiddenLink='download' />
			<Product />
			<FAQ />
		</>
	);
};
