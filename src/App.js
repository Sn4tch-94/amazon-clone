import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<h1>Chechout</h1>
					</Route>
					<Route path="/login">
						<h1>Login</h1>
					</Route>
					<Route path="/">
						<Navbar/>
						<h1>Home</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
