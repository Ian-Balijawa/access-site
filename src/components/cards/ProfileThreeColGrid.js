import tw from 'twin.macro';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import {
	SectionHeading,
	Subheading as SubheadingBase,
} from 'components/misc/Headings';
import { SectionDescription } from 'components/misc/Typography';

import TeamCard from './Team';

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

export default ({
	heading = 'Meet These Fine Folks.',
	subheading = 'Our Team',
	description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}) => {
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
};
