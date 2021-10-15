import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'Helpers/AnimationRevealPage.js';
import Hero from 'components/Hero/BackgroundAsImage';
import Features from 'components/Features/ThreeColWithSideImage.js';
import MainFeature from 'components/Features/TwoColWithButton.js';
import MainFeature2 from 'components/Features/TwoColWithTwoHorizontalFeaturesAndButton.js';
import FeatureWithSteps from 'components/Features/TwoColWithSteps.js';
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
		document.title = 'access | Home';
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
							'We assure you that our systems are designed and created by professional and experienced software engineers.',
						iconContainerCss: tw`bg-red-300 text-red-800`,
					},
				]}
			/>
			<Faqs header='false' />
		</AnimationRevealPage>
	);
};
