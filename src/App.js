import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Avatar } from "./components/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<React.Fragment>
			<NavigationBar />
			<Avatar />
			<Layout>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/About">
							<About />
						</Route>
						<Route path="/Contact">
							<Contact />
						</Route>
						<Route path="/">
							<NoMatch />
						</Route>
					</Switch>
				</Router>
			</Layout>
		</React.Fragment>
	);
} // class App extends React.Component {
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<Router>
// 					<Switch>
// 						<Route exact path="./" component="{ Home }"></Route>
// 						<Route path="./About" component="{About}"></Route>
// 						<Route path="./Contact" component="{Contact}"></Route>
// 						<Route path="./" component="{noMatch}"></Route>
// 					</Switch>
// 				</Router>
// 			</React.Fragment>
// 		);
// 	}
// }// class App extends React.Component {
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<Router>
// 					<Switch>
// 						<Route exact path="./" component="{ Home }"></Route>
// 						<Route path="./About" component="{About}"></Route>
// 						<Route path="./Contact" component="{Contact}"></Route>
// 						<Route path="./" component="{noMatch}"></Route>
// 					</Switch>
// 				</Router>
// 			</React.Fragment>
// 		);
// 	}
// }
export default App;
