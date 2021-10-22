import tw from 'twin.macro';
import styled from 'styled-components';
import { PrimaryButton as PrimaryButtonBase } from '../../components/misc/Buttons';

import * as ROUTES from '../../constants/routes';

import LogoImage from '../../images/logo.svg';
import { ReactComponent as FacebookIcon } from '../../images/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../../images/twitter-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../images/youtube-icon.svg';
import { useState } from 'react';

// const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Container = styled.div`
	position: relative;
	background: #e4e4e4;
	color: #5e5d5d;
	margin-bottom: 8px;
	padding: 0 8px;
	padding-top: 20px;
	padding-bottom: 20px;
`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(
	Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(
	PrimaryButtonBase
)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = styled.h5`
	margin-left: 0.5rem;
	font-size: 0.875rem;
	font-weight: 600;
	--tw-text-opacity: 1;
	color: rgba(45, 55, 72, var(--tw-text-opacity));
`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
	${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
	svg {
		${tw`w-4 h-4`}
	}
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const [emailAddress, setEmailAddress] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		alert(
			`Your email Address ${emailAddress} has been successfully submitted`
		);
	};
	return (
		<Container>
			<Content>
				<SixColumns>
					<Column>
						<ColumnHeading>Main</ColumnHeading>
						<LinkList>
							<LinkListItem>
								<Link href={ROUTES.FAQS}>FAQs</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href={ROUTES.ABOUT_US}>About Us</Link>
							</LinkListItem>
						</LinkList>
					</Column>
					<Column>
						<ColumnHeading>Legal</ColumnHeading>
						<LinkList>
							<LinkListItem>
								<Link href={ROUTES.PRIVACY_POLICY}>
									Privacy Policy
								</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href={ROUTES.TERMS_OF_SERVICE}>
									Terms of Service
								</Link>
							</LinkListItem>
						</LinkList>
					</Column>
					<SubscribeNewsletterColumn>
						<SubscribeNewsletterContainer>
							<ColumnHeading>
								Subscribe to our Newsletter and Youtube Channel
							</ColumnHeading>
							<SubscribeText>
								We deliver high quality posts written by
								professionals weekly and we also upload videos
								about the systems to our youtube channel. And we
								promise no spam.
							</SubscribeText>
							<SubscribeForm
								onSubmit={handleSubmit}
								method='get'
								action='#'
							>
								<Input
									type='email'
									value={emailAddress}
									onChange={({ target }) =>
										setEmailAddress(target.value)
									}
									placeholder='Your Email Address'
								/>
								<SubscribeButton type='submit'>
									Subscribe
								</SubscribeButton>
							</SubscribeForm>
						</SubscribeNewsletterContainer>
					</SubscribeNewsletterColumn>
				</SixColumns>
				<Divider />
				<ThreeColRow>
					<LogoContainer>
						<LogoImg src={LogoImage} />
						<LogoText>accessadvancedsystems</LogoText>
					</LogoContainer>
					<CopywrightNotice>
						&copy; 2021 accessadvancedsystems All Rights Reserved.
					</CopywrightNotice>
					<SocialLinksContainer>
						<SocialLink href='https://facebook.com'>
							<FacebookIcon />
						</SocialLink>
						<SocialLink href='https://twitter.com'>
							<TwitterIcon />
						</SocialLink>
						<SocialLink href='https://youtube.com'>
							<YoutubeIcon />
						</SocialLink>
					</SocialLinksContainer>
				</ThreeColRow>
			</Content>
		</Container>
	);
};
