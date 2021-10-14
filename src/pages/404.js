import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Notfound = () => {
	const history = useHistory('');
	useEffect(() => {
		document.title = '404 | NOT found';
		setTimeout(() => {
			history.push('/');
		}, 1000);
		return () => null;
	}, [history]);
	return (
		<>
			<h1>page Not found</h1>
		</>
	);
};

export default Notfound;
