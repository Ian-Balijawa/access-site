import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Footer from 'components/Footer/Footer.js';

import Modal from 'react-modal';

Modal.setAppElement('#root');

render(
	<>
		<App />
		<Footer />
	</>,
	document.getElementById('root')
);
