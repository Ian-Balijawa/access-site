import React, { useEffect } from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import tw from 'twin.macro';
import Header from 'components/headers/light.js';
import ContactUsForm from 'components/forms/TwoColContactUsWithIllustrationFullForm.js';
import ContactDetails from 'components/cards/ThreeColContactDetails.js';

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
	useEffect(() => {
		document.title = 'accessadvanced | Contact us';
		return () => null;
	}, []);

	return (
		<AnimationRevealPage>
			<Header hiddenLink={'contact'} />
			<ContactUsForm />
			<ContactDetails
				cards={[
					{
						title: 'Kampala, Uganda',
						description: (
							<>
								<Address>
									<AddressLine>Kyebndo</AddressLine>
									<AddressLine>
										Butannaziba, off Erisa road
									</AddressLine>
								</Address>
								<Email>ianbalijawa16@gmail.com</Email>
								<Phone>+25676008970</Phone>
							</>
						),
					},
				]}
			/>
		</AnimationRevealPage>
	);
};
