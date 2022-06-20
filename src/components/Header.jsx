// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import "./Header.css";

const Header = () => {
	return (
		<>
		<header className="header-wrapper">
			<h1 className="header-title">Call a Friend</h1>
			<p className="header-subtitle">your friendly contact app</p>
		</header>
		</>
	)
}

export default Header;