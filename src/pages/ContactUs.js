import { useEffect } from 'react';
import tw from 'twin.macro';
import Header from '../components/Header/light';
import ContactUsForm from '../components/forms/TwoColContactUsWithIllustrationFullForm';
import ContactDetails from '../components/cards/ContactDetails';

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	useEffect(() => {
		document.title = 'accessadvanced | Contact us';
		return () => null;
	}, []);

	return (
		<>
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
		</>
	);
};
