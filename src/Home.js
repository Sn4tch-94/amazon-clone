import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
	return (
		<div className="home">
			<img 
				className="home__image"
				src="https://m.media-amazon.com/images/I/81TUKrkmniL._SX3000_.jpg" 
				alt=""
			/>
			<div className="home__row">
				<Product
					id="1"
					title="Apple iPhone 12 Pro Max (128 Go) - Bleu Pacifique"
					price={1099.00}
					rating={5}
					image="https://m.media-amazon.com/images/I/71CaXdX4AJL._AC_UL320_.jpg"
				/>
				<Product
					id="2"
					title="Apple AirPodsPro"
					price={193.44}
					rating={4}
					image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UL320_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="3"
					title="Sandisk Extreme Carte Mémoire MicroSDXC 128 Go"
					price={17.26}
					rating={3}
					image="https://m.media-amazon.com/images/I/81pngNVLPhL._AC_UL320_.jpg"
				/>
				<Product
					id="4"
					title="Google Chromecast : Boitier multimédia pour streaming"
					price={39.00}
					rating={4}
					image="https://m.media-amazon.com/images/I/612mod-xowL._AC_UL320_.jpg"
				/>
				<Product
					id="5"
					title="Fire TV Stick Lite avec télécommande vocale Alexa"
					price={29.99}
					rating={4}
					image="https://m.media-amazon.com/images/I/51Da2Z+FTFL._AC_UL320_.jpg"
				/>
			</div>
		</div>
	)
}

export default Home
