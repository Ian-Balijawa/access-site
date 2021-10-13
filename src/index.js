import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from 'components/footers/FiveColumnWithInputForm.js';

import Modal from 'react-modal';

Modal.setAppElement('#root');

ReactDOM.render(
	<>
		<App />
		<Footer />
	</>,
	document.getElementById('root')
);
