import FAQ from 'components/faqs/SingleCol.js';
import tw from 'twin.macro';
import Header from 'components/headers/light.js';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import { useEffect } from 'react';

const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
const HighlightedText = tw.span`text-primary-500`;

const Faqs = props => {
	const { header } = props;
	useEffect(() => {
		document.title = 'Frequently asked questions';

		return () => null;
	}, []);

	return (
		<>
			<AnimationRevealPage>
				{!(header === 'false') && <Header />}
				<FAQ
					subheading={<Subheading>FAQS</Subheading>}
					heading={
						<>
							You have{' '}
							<HighlightedText>Questions ?</HighlightedText>
						</>
					}
					faqs={[
						{
							question: 'How reliable are the systems ?',
							answer: 'Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
						},
						{
							question: 'How much do these systems cost?',
							answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
						},
						{
							question:
								'Are there specific requirements I should meet to have these systems?',
							answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
						},
						{
							question:
								'What are some of the payment modes incase I need to purchase the systems ?',
							answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
						},
						{
							question: 'Who has access to my business data ?',
							answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
						},
						{
							question: 'Are the systems fully tested ?',
							answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
						},
						{
							question: 'Who are our current system users ?',
							answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
						},
					]}
				/>
			</AnimationRevealPage>
		</>
	);
};

export default Faqs;
