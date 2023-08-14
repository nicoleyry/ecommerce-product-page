import { useState, useEffect } from 'react';
import '../styles/navbar.scss'

import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import cartProductThumbnail from '../images/image-product-1-thumbnail.jpg';
import cartDelete from '../images/icon-delete.svg';

export default function Navbar({cartTotal, setCartTotal}) {
	const [dropdown, setDropdown] = useState(false);
	const [menuIsActive, setMenuIsActive] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	let price = 125.00;

	useEffect(() => {
		setTotalPrice(price * cartTotal)
	}, [price, cartTotal]);

	return (
		<div className="navbar">
			<div className={`hamburger-menu ${menuIsActive ? "is-active" : ""}`}
				onClick={() => menuIsActive ? setMenuIsActive(false) : setMenuIsActive(true)}>
				<span className="hamburger-menu-line"></span>
				<span className="hamburger-menu-line"></span>
				<span className="hamburger-menu-line"></span>
			</div>
			<div className="navbar-main">
				<img src={logo} alt="logo"/>
				<p>Collections</p>
				<p>Men</p>
				<p>Women</p>
				<p>About</p>
				<p>Contact</p>
			</div>
			<div className={`navbar-menu-mobile ${menuIsActive ? "is-active" : ""}`}>
				<div className="menu-container">
					<div className={`hamburger-menu ${menuIsActive ? "is-active" : ""}`}
						onClick={() => menuIsActive ? setMenuIsActive(false) : setMenuIsActive(true)}>
						<span className="hamburger-menu-line"></span>
						<span className="hamburger-menu-line"></span>
						<span className="hamburger-menu-line"></span>
					</div>
					<p>Collections</p>
					<p>Men</p>
					<p>Women</p>
					<p>About</p>
					<p>Contact</p>
				</div>
			</div>
			<div className="navbar-costumer">
				<div className="navbar-costumer-cart">
					<img className='navbar-costumer-cart-img' src={cart} alt='cart' 
					onClick={() => !dropdown ? setDropdown(true) : setDropdown(false)}/>
					{(cartTotal !== 0) && <div className='navbar-costumer-cart-num' onClick={() => !dropdown ? setDropdown(true) : setDropdown(false)}>{cartTotal}</div>}
					{dropdown && <div className="navbar-costumer-cart-dropdown">
						<div className='navbar-costumer-cart-dropdown-top'>
							<p>Cart</p>
						</div>
						<div className='navbar-costumer-cart-dropdown-bottom'>
							{(cartTotal === 0) && <p>Your cart is empty.</p>}
							{(cartTotal !== 0) && <div className='cart-dropdown-item'>
								<img className='cart-dropdown-item-thumbnail' src={cartProductThumbnail} alt="cart item" />
								<div className='cart-dropdown-item-details'>
									<p className='title'>Fall Limited Edition Sneakers</p>
									<p className='price'>$<span>{price}</span> x <span>{cartTotal}</span> <span className='price-total'>${totalPrice}</span></p>
								</div>
								<img className='cart-dropdown-item-delete' onClick={() => setCartTotal(0)} src={cartDelete} alt="delete" />
							</div>}
							{(cartTotal !== 0) && <button className='cart-dropdown-button'>Checkout</button>}
						</div>
					</div>}
				</div>
				<img src={avatar} alt='user' className='navbar-costumer-user'/>
			</div>
		</div>
	);
};