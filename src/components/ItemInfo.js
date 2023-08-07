import { useState } from 'react';
import '../styles/iteminfo.scss';
import iconMinus from '../images/icon-minus.svg';
import iconPlus from '../images/icon-plus.svg';
import iconCart from '../images/icon-cart.svg';

export default function ItemInfo() {
	const [counts, setCounts] = useState(0);

	const countsHandler = (action) => {
		let newCounts = counts;
		if(action === 'minus' && counts > 0) {
			newCounts -= 1;
		} else if (action === 'plus') {
			newCounts += 1;
		}

		setCounts(newCounts);
	};

	return (
		<div className='item-info'>
			<p className='subtitle'>sneaker company</p>
			<h1 className='title'>Fall Limited Edition Sneakers</h1>
			<p className='desc'>
				These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer
				sole, they'll withstand everything the weather can offer.
			</p>
			<div className="price-block">
				<span className="final-price">$125.00</span>
				<span className="discount">50%</span>
				<br />
				<span className="original-price">$250.00</span>
			</div>
			<div className="bottom-area">
				<div className="counter">
					<img className='minus'src={iconMinus} onClick={() => countsHandler('minus')} alt="minus" />
					<span className='counts'>{counts}</span>
					<img className='plus' src={iconPlus} onClick={() => countsHandler('plus')} alt="plus" />
				</div>
				<button className="button">
					<img className='cart-button' src={iconCart} alt="cart"/>
					<span>Add to cart</span>
				</button>
			</div>
		</div>
	);
}
