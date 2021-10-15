import React from 'react';
import AnimationRevealPage from 'Helpers/AnimationRevealPage.js';
import tw from 'twin.macro';
import Header from 'components/Header/light.js';
import Features from 'components/Features/ThreeColSimple.js';
import TeamCardGrid from 'components/cards/TeamContainer.js';

import SupportIconImage from 'images/support-icon.svg';
import ShieldIconImage from 'images/shield-icon.svg';
import CustomerLoveIconImage from 'images/simple-icon.svg';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
	return (
		<AnimationRevealPage>
			<Header hiddenLink={'about'} />
			<Features
				subheading={<Subheading>Our Values</Subheading>}
				heading='We follow these.'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				cards={[
					{
						imageSrc: SupportIconImage,
						title: '24/7 Support',
						description:
							'Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport',
					},
					{
						imageSrc: ShieldIconImage,
						title: 'Strong Teams',
						description:
							'Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport',
					},
					{
						imageSrc: CustomerLoveIconImage,
						title: 'Customer Satisfaction',
						description:
							'Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport',
					},
				]}
				linkText=''
			/>
			<TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
		</AnimationRevealPage>
	);
};
