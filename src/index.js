import React from 'react';
import Modal from 'react-modal';
import './index.css';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer/Footer.js';
import reportWebVitals from './reportWebVitals';

Modal.setAppElement('#root');

render(
	<React.StrictMode>
		<App />
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
