import { useState } from 'react';
import '../styles/_navbar.scss'

import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import cartProductThumbnail from '../images/image-product-1-thumbnail.jpg';
import cartDelete from '../images/icon-delete.svg';

export default function Navbar() {
	const [dropdown, setDropdown] = useState(false);
	const [product, setProduct] = useState(false);

	return (
		<div className="navbar">
			<div className="navbar-main">
				<img src={logo} alt="logo"/>
				<p>Collections</p>
				<p>Men</p>
				<p>Women</p>
				<p>About</p>
				<p>Contact</p>
			</div>
			<div className="navbar-costumer">
				<div className="navbar-costumer-cart"
					onClick={() => !dropdown ? setDropdown(true) : setDropdown(false)}
					onMouseLeave={() => setDropdown(false)}>
					<img className='navbar-costumer-cart-img' src={cart} alt='cart' />
					{product && <div className='navbar-costumer-cart-num'>3</div>}
					{dropdown && <div className="navbar-costumer-cart-dropdown">
						<div className='navbar-costumer-cart-dropdown-top'>
							<p>Cart</p>
						</div>
						<div className='navbar-costumer-cart-dropdown-bottom'>
							{!product && <p>Your cart is empty.</p>}
							{product && <div className='cart-dropdown-item'>
								<img className='cart-dropdown-item-thumbnail' src={cartProductThumbnail} alt="cart item" />
								<div className='cart-dropdown-item-details'>
									<p className='title'>Fall Limited Edition Sneakers</p>
									<p className='price'>$<span>125.00</span> x <span>3</span> <span className='price-total'>$375.00</span></p>
								</div>
								<img className='cart-dropdown-item-delete' src={cartDelete} alt="delete" />
							</div>}
							{product && <button className='cart-dropdown-button'>Checkout</button>}
						</div>
					</div>}
				</div>
				<img src={avatar} alt='user' className='navbar-costumer-user'/>
			</div>
		</div>
	);
};