import { useState } from 'react';
import '../styles/iteminfo.scss';
import iconMinus from '../images/icon-minus.svg';
import iconPlus from '../images/icon-plus.svg';
import iconCart from '../images/icon-cart.svg';

export default function ItemInfo({product, currentCartTotal, setAddToCartTotal}) {
	const [productCounts, setProductCounts] = useState(0);
	const [showWarning, setShowWarning] = useState(false);
	const [plusEnable, setPlusEnable] = useState(true);
	const [minusEnable, setMinusEnable] = useState(false);

	const countsHandler = (action) => {
		let newCounts = productCounts;
		let currentStock = product.stock - currentCartTotal;
		if(currentStock !== productCounts) {
			setPlusEnable(true);
			setMinusEnable(true);
		}

		if(action === 'plus') {
			if(currentStock > 0 && (newCounts+1) <= currentStock) {
				newCounts += 1;
				setShowWarning(false);

				if(newCounts === currentStock) {
					setPlusEnable(false);
				}
			} else {
				setPlusEnable(false);
				setShowWarning(true);
			}
		} else if (action === 'minus' && (newCounts-1) >= 0) {
			newCounts -= 1;
			setShowWarning(false);

			if(newCounts === 0) {
				setMinusEnable(false);
			}
		} else {
			setMinusEnable(false)
			return;
		}

		setProductCounts(newCounts);
	};

	const addToCartHandler = () => {
		setAddToCartTotal(productCounts);
		setProductCounts(0);
		setMinusEnable(false);
		setShowWarning(false);
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
				<span className="final-price">${product.price.finalPrice}</span>
				<span className="discount">{product.price.discount}%</span>
				<br />
				<span className="original-price">${product.price.originalPrice}</span>
			</div>
			<div className="bottom-area">
				<div className="counter">
					<img className={`minus ${minusEnable ? '' : 'disable'}`} src={iconMinus} onClick={() => countsHandler('minus')} alt="minus" />
					<span className='counts'>{productCounts}</span>
					<img className={`plus ${plusEnable ? '' : 'disable'}`} src={iconPlus} onClick={() => countsHandler('plus')} alt="plus" />
				</div>
				<button className="button" onClick={addToCartHandler}>
					<img className='cart-button' src={iconCart} alt="cart"/>
					<span>Add to cart</span>
				</button>
			</div>
			<p className={`warning ${showWarning ? 'show' : ''}`}>
				{showWarning && 'Exceeds Stock Limit'}
			</p>
		</div>
	);
}
