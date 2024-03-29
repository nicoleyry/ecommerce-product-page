import { useState, useEffect } from 'react';
import '../styles/navbar.scss'

import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import cartProductThumbnail from '../images/image-product-1-thumbnail.jpg';
import cartDelete from '../images/icon-delete.svg';

export default function Navbar({product, currentCartTotal, setCurrentCartTotal}) {
	const [dropdown, setDropdown] = useState(false);
	const [menuIsActive, setMenuIsActive] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		setTotalPrice(Math.floor((product.price.finalPrice * currentCartTotal * 100) / 100).toFixed(2));
	}, [product.price.finalPrice, currentCartTotal]);

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
					{(currentCartTotal !== 0) && <div className='navbar-costumer-cart-num' onClick={() => !dropdown ? setDropdown(true) : setDropdown(false)}>{currentCartTotal}</div>}
					{dropdown && <div className="navbar-costumer-cart-dropdown">
						<div className='navbar-costumer-cart-dropdown-top'>
							<p>Cart</p>
						</div>
						<div className='navbar-costumer-cart-dropdown-bottom'>
							{(currentCartTotal === 0) && <p>Your cart is empty.</p>}
							{(currentCartTotal !== 0) && <div className='cart-dropdown-item'>
								<img className='cart-dropdown-item-thumbnail' src={cartProductThumbnail} alt="cart item" />
								<div className='cart-dropdown-item-details'>
									<p className='title'>Fall Limited Edition Sneakers</p>
									<p className='price'>$<span>{product.price.finalPrice}</span> x <span>{currentCartTotal}</span> <span className='price-total'>${totalPrice}</span></p>
								</div>
								<img className='cart-dropdown-item-delete' onClick={() => setCurrentCartTotal(0)} src={cartDelete} alt="delete" />
							</div>}
							{(currentCartTotal !== 0) && <button className='cart-dropdown-button'>Checkout</button>}
						</div>
					</div>}
				</div>
				<img src={avatar} alt='user' className='navbar-costumer-user'/>
			</div>
		</div>
	);
};