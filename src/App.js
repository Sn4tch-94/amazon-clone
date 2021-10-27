import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Navbar/>
						<h1>Chechout</h1>
					</Route>
					<Route path="/login">
						<h1>Login</h1>
					</Route>
					<Route path="/">
						<Navbar/>
						<Home/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
