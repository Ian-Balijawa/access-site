import Modal from 'react-modal';
import './index.css';
import { render } from 'react-dom';
import App from './App';
import Footer from './components/Footer/Footer.js';

Modal.setAppElement('#root');

render(
	<>
		<App />
		<Footer />
	</>,
	document.getElementById('root')
);
