import { useEffect } from 'react';
import AnimationRevealPage from 'Helpers/AnimationRevealPage.js';
import tw from 'twin.macro';
import Header from 'components/Header/light.js';
import ContactUsForm from 'components/forms/TwoColContactUsWithIllustrationFullForm.js';
import ContactDetails from 'components/cards/ContactDetails.js';

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
									<AddressLine>
										Kyebndo off Gayaza Main Road along Erisa
										Road [Erisa RingRoad],{' '}
									</AddressLine>
									<AddressLine>
										@ Butannaziba Business center
									</AddressLine>
								</Address>
								<Email>accessadvancedsystems@gmail.com</Email>
								<Phone>+25676008970</Phone>
							</>
						),
					},
				]}
			/>
		</AnimationRevealPage>
	);
};
