import 'tailwindcss/dist/base.css';
import 'styles/globalStyles.css';

/**
 *	This is the entry point component of this project.
 *  Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself
 *	 from "";
 *	Hero section is the top most section on the page. It contains the header as well.
 *	So you dont need to import headers separately
 */

import HOME from 'pages/Home';
import AboutUs from 'pages/AboutUs';
import ContactUs from 'pages/ContactUs';
import TermsOfService from 'pages/TermsOfService';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import Pricing from 'pages/Pricing';
import Notfound from 'pages/404';
import Faqs from 'pages/Faqs';

import ThankYouPage from 'pages/ThankYouPage';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';

export default function App() {
	// If you want to disable the animation just use the disabled `prop` like below on your page's component
	// return <AnimationRevealPage disabled>xxxxxxxxxx;

	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.THANK_YOU}>
					<ThankYouPage />
				</Route>
				<Route exact path={ROUTES.CONTACT_US}>
					<ContactUs />
				</Route>
				<Route exact path={ROUTES.TERMS_OF_SERVICE}>
					<TermsOfService />
				</Route>
				<Route exact path={ROUTES.PRIVACY_POLICY}>
					<PrivacyPolicy />
				</Route>
				<Route path={ROUTES.PRODUCTS} exact>
					<Pricing />
				</Route>
				<Route path={ROUTES.ABOUT_US} exact>
					<AboutUs />
				</Route>
				<Route path={ROUTES.FAQS} exact>
					<Faqs />
				</Route>
				<Route exact path={ROUTES.NOT_FOUND}>
					<Notfound />
				</Route>
				<Route exact path='/'>
					<HOME />
				</Route>
				<Redirect to={ROUTES.NOT_FOUND} />
			</Switch>
		</Router>
	);
}
