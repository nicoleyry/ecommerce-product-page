import { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ItemInfo from './components/ItemInfo';
import ItemShowcase from './components/ItemShowcase';

function App() {
	const [cartTotal, setCartTotal] = useState(0);

	return (
		<div className='App'>
			<Navbar cartTotal={cartTotal} setCartTotal={setCartTotal} />
			<div className="main-content">
				<ItemShowcase />
				<ItemInfo setCartTotal={setCartTotal} />
			</div>
		</div>
	);
}

export default App;
