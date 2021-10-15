import './styles/product.css';
import systems from '../../fixtures/products.js';
import { useState } from 'react';

const Product = () => {
	const [toggleCurrency, setToggleCurrency] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	let currency = toggleCurrency ? 'UGX' : '$';
	let rateFactor = currency === 'UGX' ? 1 : 3540;

	const handleSearch = searchTerm => {
		const filtered = systems.filter(system => system.id === searchTerm);

		if (filtered) {
			// systems = filtered;
		}
	};

	return (
		<>
			<div className='header-container'>
				<div>
					<input
						type='text'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						placeholder='Search Systems'
					/>
					<button
						className='search-key'
						onClick={() => handleSearch(searchTerm)}
					>
						Search
					</button>
				</div>

				<button
					className='btn currency'
					onClick={() =>
						setToggleCurrency(toggleCurrency => !toggleCurrency)
					}
				>
					switch to {currency === '$' ? 'USD' : currency}
				</button>
			</div>
			<div className='container'>
				{systems.map(system => (
					<div className='card' key={system.id}>
						<div className='image'></div>
						<p className='name'>{system.name}</p>
						<p className='description'>{system.description}</p>
						<div className='btns'>
							<div className='download-svg'>
								<button className='btn download'>
									Download
								</button>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
										/>
									</svg>
								</span>
							</div>
							<button className='btn price'>
								{`${currency} ${Math.round(
									system.price / rateFactor
								)}`}
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Product;
