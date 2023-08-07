import './App.scss';
import Navbar from './components/Navbar';
import ItemInfo from './components/ItemInfo';
import ItemShowcase from './components/ItemShowcase';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<div className="main-contain">
				<ItemShowcase />
				<ItemInfo />
			</div>
		</div>
	);
}

export default App;
