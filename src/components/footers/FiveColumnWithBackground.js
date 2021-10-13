import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line

import * as ROUTES from '../../constants/routes';

import LogoImage from 'images/logo.svg';
import { ReactComponent as FacebookIcon } from 'images/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg';
import { ReactComponent as YoutubeIcon } from 'images/youtube-icon.svg';

const Container = tw.div`relative bg-primary-500 text-gray-100`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const FiveColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

// const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;
const Column = styled.div`
	padding: 4px;
	margin-left: 25px;
`;

const ColumnHeading = tw.h5`py-5 mx-1 uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;

const Divider = tw.div`my-16 border-b-2 border-primary-400 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-100`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-400`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
	${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
	svg {
		${tw`w-4 h-4`}
	}
`;

export default () => {
	return (
		<Container>
			<Content>
				<FiveColumns>
					<Column>
						<ColumnHeading>Main</ColumnHeading>
						<LinkList>
							<LinkListItem>
								<Link href='#'>Blog</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href={ROUTES.FAQS}>FAQs</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href={ROUTES.ABOUT_US}>About Us</Link>
							</LinkListItem>
						</LinkList>
					</Column>
					<Column>
						<ColumnHeading>Products</ColumnHeading>
						<LinkList>
							<LinkListItem>
								<Link href={ROUTES.PRODUCTS}>Systems</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href='#'>Personal</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href='#'>Business</Link>
							</LinkListItem>
							<LinkListItem>
								<Link href={ROUTES.TEAM}>Team</Link>
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
				</FiveColumns>
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
