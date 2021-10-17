import './styles/product.css';
import systems from '../../fixtures/products.js';
import { useState } from 'react';

const Product = () => {
	const [toggleCurrency, setToggleCurrency] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');

	let currency = toggleCurrency ? 'USD' : 'UGX';
	let rateFactor = currency === 'UGX' ? 1 : 3580;

	let reactElementkey = 0;

	const handleSearch = term => {
		let data = [...systems];
		const filtered = data.filter(system => system.name === term);
		if (filtered.length > 0) {
			data = filtered;
			console.log(data, term);
		}
	};

	return (
		<>
			<div className='product-header-container'>
				<div>
					<input
						type='text'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						placeholder='Search Systems'
					/>
					<button
						className='search-btn'
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
					switch to {toggleCurrency ? 'UGX' : 'USD'}
				</button>
			</div>
			<div className='product-container'>
				{systems.map(system => (
					<div className='product-card' key={reactElementkey++}>
						<img src='/images/mac-school-system.png' alt='' />
						<p className='name'>{system.name}</p>
						<p className='description'>{system.description}</p>
						<div className='btns'>
							<div className='product-download'>
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
