import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import amazon_logo from "./images/Amazon_logo.png"
import { RoomOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'

function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/">
				<img 
					className="navbar__logo" 
					src={amazon_logo}
					alt=""
				/>
			</Link>
			<div className="navbar__nav">
				<RoomOutlined className="navbar__pinIcon"/>
				<Link to="/" className="navbar__link">
					<div className="navbar__option navbar__optionDelivery">
						<span className="navbar__optionLineOne">Deliver to</span>
						<span className="navbar__optionLineTwo">France</span>
					</div>
				</Link>
			</div>
			<div className="navbar__search">
				<input type="text" className="navbar__searchInput" />
				<Search className="navbar__searchIcon"/>
			</div>
			<div className="navbar__nav">
				<Link to="/login" className="navbar__link">
					<div className="navbar__option">
						<span className="navbar__optionLineOne">Hello Alexis</span>
						<span className="navbar__optionLineTwo">Sign In</span>
					</div>
				</Link>
				<Link to="/" className="navbar__link">
					<div className="navbar__option">
						<span className="navbar__optionLineOne">Returns</span>
						<span className="navbar__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<Link to="/" className="navbar__link">
					<div className="navbar__option">
						<span className="navbar__optionLineOne">Hello Alexis</span>
						<span className="navbar__optionLineTwo">Sign In</span>
					</div>
				</Link>
				<Link to="/checkout" className="navbar__link">
					<div className="navbar__optionBasket">
						<span className="navbar__optionLineTwo navbar__basketCount">0</span>
						<ShoppingCartOutlined className="navbar_basketIcon"/>
					</div>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
