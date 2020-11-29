import React, {Component} from 'react';

//路由
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//布局组件
import MainPage from "./components/MainPage/index.jsx"
import StudentTest from "./student/StudentTest"

class App extends Component {
	render() {
		return (
			<div className="App" >
				<BrowserRouter>
				<Switch>
						<Route exact path = "/" component = {MainPage}/>
						<Route path = "/study" component = {MainPage}/>
						<Route path = "/student" component = {StudentTest}/>
				</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;