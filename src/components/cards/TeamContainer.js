/* eslint-disable import/no-anonymous-default-export */
import tw from 'twin.macro';
import {
	Container,
	ContentWithPaddingXl,
} from '../../components/misc/Layouts.js';
import {
	SectionHeading,
	Subheading as SubheadingBase,
} from '../../components/misc/Headings';
import { SectionDescription } from '../../components/misc/Typography';

import TeamCard from './Team';

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

export default function Team({
	heading = 'Meet Our Team Folks.',
	subheading = 'Our Team',
	description = 'We have a very strong team that has altogether helped to build the company and its systems, all perfoming unique skills',
}) {
	return (
		<>
			<Container>
				<ContentWithPaddingXl>
					<HeadingContainer>
						{subheading && <Subheading>{subheading}</Subheading>}
						{heading && <Heading>{heading}</Heading>}
						{description && (
							<Description>{description}</Description>
						)}
					</HeadingContainer>
				</ContentWithPaddingXl>
			</Container>
			<TeamCard />
		</>
	);
}
