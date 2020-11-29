import React, {Component} from 'react';

//路由
import {BrowserRouter} from 'react-router-dom';

//布局组件
import TopBar from "./Navigator/TopBar.jsx";
import Showthestudent from "./student/studentshow";
import ShowthemenuStudent from "./student/studentmenu";
import Showthecourse from "./teacher/teachercourse";

class App extends Component {
	render() {
		return (
			<div className="App" >
				<BrowserRouter>
					<TopBar/>
					<Showthestudent/>
					<ShowthemenuStudent/>
					<Showthecourse/>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;