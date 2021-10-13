import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/heros/BackgroundAsImage';
import Features from 'components/features/ThreeColWithSideImage.js';
import MainFeature from 'components/features/TwoColWithButton.js';
import MainFeature2 from 'components/features/TwoColWithTwoHorizontalFeaturesAndButton.js';
import FeatureWithSteps from 'components/features/TwoColWithSteps.js';
import Testimonial from 'components/testimonials/TwoColumnWithImageAndRating.js';
import GetStarted from 'components/cta/GetStarted';
import heroScreenshotImageSrc from 'images/hero-screenshot-1.png';
import macHeroScreenshotImageSrc from 'images/hero-screenshot-2.png';
import prototypeIllustrationImageSrc from 'images/prototype-illustration.svg';
import { ReactComponent as BriefcaseIcon } from 'feather-icons/dist/icons/briefcase.svg';
import { ReactComponent as MoneyIcon } from 'feather-icons/dist/icons/dollar-sign.svg';
import Faqs from './Faqs';
import { useEffect } from 'react';

export default () => {
	const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
	const HighlightedText = tw.span`text-primary-500`;

	useEffect(() => {
		document.title = 'accessadvancedsystems | Home';
		return () => null;
	}, []);

	return (
		<AnimationRevealPage>
			<Hero roundedHeaderButton={false} />
			<Features
				subheading={<Subheading>Features</Subheading>}
				heading={
					<>
						We offer Amazing Services to our{' '}
						<HighlightedText>clients</HighlightedText>
					</>
				}
			/>
			<MainFeature
				subheading={<Subheading>Quality Work</Subheading>}
				imageSrc={heroScreenshotImageSrc}
				imageBorder={true}
				imageDecoratorBlob={true}
			/>
			<FeatureWithSteps
				subheading={<Subheading>STEPS</Subheading>}
				heading={
					<>
						Easy to use and{' '}
						<HighlightedText>Get Started.</HighlightedText>
					</>
				}
				textOnLeft={false}
				imageSrc={macHeroScreenshotImageSrc}
				imageDecoratorBlob={true}
				decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
			/>
			<MainFeature2
				subheading={<Subheading>VALUES</Subheading>}
				heading={
					<>
						We Always Abide by Our{' '}
						<HighlightedText>Principles.</HighlightedText>
					</>
				}
				imageSrc={prototypeIllustrationImageSrc}
				showDecoratorBlob={false}
				features={[
					{
						Icon: MoneyIcon,
						title: 'Affordable',
						description:
							'We promise to offer you the best rate we can - at par with the industry standard.',
						iconContainerCss: tw`bg-green-300 text-green-800`,
					},
					{
						Icon: BriefcaseIcon,
						title: 'Professionalism',
						description:
							'We assure you that our templates are designed and created by professional designers.',
						iconContainerCss: tw`bg-red-300 text-red-800`,
					},
				]}
			/>
			<Testimonial
				subheading={<Subheading>Testimonials</Subheading>}
				heading={
					<>
						Our Clients <HighlightedText>Love Us.</HighlightedText>
					</>
				}
				testimonials={[
					{
						stars: 5,
						profileImageSrc:
							'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
						heading: 'Amazing User Experience',
						quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
						customerName: 'Charlotte Hale',
						customerTitle: 'Director, Delos',
					},
					{
						stars: 5,
						profileImageSrc:
							'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
						heading:
							'Love the Developer Experience and Design Principles !',
						quote: 'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
						customerName: 'Adam Cuppy',
						customerTitle: 'Founder, EventsNYC',
					},
				]}
			/>
			<Faqs />
			<GetStarted />
		</AnimationRevealPage>
	);
};
