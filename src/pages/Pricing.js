import { useEffect } from 'react';
import AnimationRevealPage from 'Helpers/AnimationRevealPage.js';
import Header from 'components/Header/light.js';
import Testimonial from 'components/Testimonial/ThreeColumnWithProfileImage.js';
import FAQ from 'components/Faqs/SingleCol.js';

export default () => {
	useEffect(() => {
		document.title = 'Product - Pricing';

		return () => null;
	}, []);
	return (
		<AnimationRevealPage>
			<Header hiddenLink={'pricing'} />
			<Testimonial heading='Our Paying Customers' />
			<FAQ />
		</AnimationRevealPage>
	);
};
