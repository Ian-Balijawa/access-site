import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {
	SectionHeading,
	Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import { ReactComponent as ChevronDownIcon } from 'feather-icons/dist/icons/chevron-down.svg';
import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-7.svg';
import { ReactComponent as SvgDecoratorBlob2 } from 'images/svg-decorator-blob-8.svg';

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
	${tw`ml-2 transition duration-300`}
	svg {
		${tw`w-6 h-6`}
	}
`);
const Answer = motion(
	tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
	${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
	${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
	subheading = 'FAQS',
	heading = 'You have Questions ?',
	description = 'And we have got answers to all of them.',
	faqs = [
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
	],
}) => {
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

	const toggleQuestion = questionIndex => {
		if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
		else setActiveQuestionIndex(questionIndex);
	};

	return (
		<Container>
			<ContentWithPaddingXl>
				<Column>
					<HeaderContent>
						{subheading && <Subheading>{subheading}</Subheading>}
						<Heading>{heading}</Heading>
						{description && (
							<Description>{description}</Description>
						)}
					</HeaderContent>
					<FAQSContainer>
						{faqs.map((faq, index) => (
							<FAQ
								key={index}
								onClick={() => {
									toggleQuestion(index);
								}}
								className='group'
							>
								<Question>
									<QuestionText>{faq.question}</QuestionText>
									<QuestionToggleIcon
										variants={{
											collapsed: { rotate: 0 },
											open: { rotate: -180 },
										}}
										initial='collapsed'
										animate={
											activeQuestionIndex === index
												? 'open'
												: 'collapsed'
										}
										transition={{
											duration: 0.02,
											ease: [0.04, 0.62, 0.23, 0.98],
										}}
									>
										<ChevronDownIcon />
									</QuestionToggleIcon>
								</Question>
								<Answer
									variants={{
										open: {
											opacity: 1,
											height: 'auto',
											marginTop: '16px',
										},
										collapsed: {
											opacity: 0,
											height: 0,
											marginTop: '0px',
										},
									}}
									initial='collapsed'
									animate={
										activeQuestionIndex === index
											? 'open'
											: 'collapsed'
									}
									transition={{
										duration: 0.3,
										ease: [0.04, 0.62, 0.23, 0.98],
									}}
								>
									{faq.answer}
								</Answer>
							</FAQ>
						))}
					</FAQSContainer>
				</Column>
			</ContentWithPaddingXl>
			<DecoratorBlob1 />
			<DecoratorBlob2 />
		</Container>
	);
};
