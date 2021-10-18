import FAQ from 'components/Faqs/SingleCol.js';
import tw from 'twin.macro';
import Header from 'components/Header/light.js';
import AnimationRevealPage from 'Helpers/AnimationRevealPage.js';
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
							answer: 'These systems are buit basing on the research & surveys carried out for different businesses. Through this study, a script is written and shared with developing team then a sample of the systems if produced for thorough testing and loopholes or errors are worked upon untill the system is ready for use.',
						},
						{
							question: 'How much do these systems cost?',
							answer: 'The costs depend on the kind of business but the least a system can go for is UGX 2,000,000 or USD 559 and depending on financial position, we make sure money and resources is not a limiting factor. An agreement can be signed on the mode of payment so you can still be able to use the system',
						},
						{
							question:
								'Are there specific requirements I should meet to have these systems?',
							answer: 'A fully functional and up to date computer, old computers can be serviced to accomodate the software. In case systems are to be networked, requirements depend on how many computers will e on the network.',
						},
						{
							question:
								'What are some of the payment modes incase I need to purchase the systems ?',
							answer: "We work with sales agents, so we don't allow hard cash and mobile money can only be given to an agent if approved by the offices. Installments are acceptable dependening on the a legal agreement.",
						},
						{
							question: 'Who has access to my business data ?',
							answer: 'Since our systems are offline, you and only you have access to your business data. For backup, we usually sell to a client part of our cloud space and we usually recommend a client to go online and perform a data backup',
						},
						{
							question: 'Are the systems fully tested ?',
							answer: 'They all are. The developing team fully tests out the systems to remove any loop holes and bugs. This is done untill the system is ready to be used',
						},
						{
							question: 'Who are our current system users ?',
							answer: "The list doesn't stop growing for people are finding need for having these systems at their businesses",
						},
					]}
				/>
			</AnimationRevealPage>
		</>
	);
};

export default Faqs;
