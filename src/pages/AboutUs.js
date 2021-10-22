import tw from 'twin.macro';
import Header from '../components/Header/light';
import FAQ from '../components/Faqs/SingleCol.js';
import TeamCardGrid from '../components/cards/TeamContainer';
import Features from '../components/Features/ThreeColWithSideImage.js';

import SupportIconImage from '../images/support-icon.svg';
import ShieldIconImage from '../images/shield-icon.svg';
import CustomerLoveIconImage from '../images/simple-icon.svg';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	return (
		<>
			<Header hiddenLink={'about'} />
			<Features
				subheading={<Subheading>Our Values</Subheading>}
				heading='We follow these.'
				description=''
				cards={[
					{
						imageSrc: SupportIconImage,
						title: '24/7 Support',
						description:
							'Always available incase of any system inquiry. Communication to be made through the contacts provided, special office line and social media links',
					},
					{
						imageSrc: ShieldIconImage,
						title: 'Strong Teams',
						description:
							'We have trust in our team do to the research and strong survey we carry to develop the systems. We work hand in hand to make sure we have the systems that match the clients busisness',
					},
					{
						imageSrc: CustomerLoveIconImage,
						title: 'Customer Satisfaction',
						description:
							"Customers will always say anything they want to be added to their we'll add their requested features. We customize the system basing on the business operation",
					},
				]}
				linkText=''
			/>
			<TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
			<FAQ />
		</>
	);
};
