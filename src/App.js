import { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ItemInfo from './components/ItemInfo';
import ItemShowcase from './components/ItemShowcase';

const formatPrice = (price) => {
	return (Math.round(price * 100) / 100).toFixed(2);
};

function App() {
	const [addToCartTotal, setAddToCartTotal] = useState(0);
	const [currentCartTotal, setCurrentCartTotal] = useState(0);
	let product = {
		stock: 10,
		price: {
			originalPrice: formatPrice(250),
			discount: 50,
			finalPrice: formatPrice(125),
		}
	};

	useEffect(() => {
		setCurrentCartTotal(n => n+addToCartTotal);
	}, [addToCartTotal]);

	return (
		<div className='App'>
			<Navbar product={product} currentCartTotal={currentCartTotal} setCurrentCartTotal={setCurrentCartTotal} />
			<div className="main-content">
				<ItemShowcase />
				<ItemInfo product={product} currentCartTotal={currentCartTotal} setAddToCartTotal={setAddToCartTotal} />
			</div>
		</div>
	);
}

export default App;
