import React, {Component} from 'react';

//路由
import {BrowserRouter} from 'react-router-dom';

//布局组件
import TopBar from "./Navigator/TopBar.jsx";  //导航栏
import Banner from "./Navigator/Carousel.jsx"; //走马灯
import CourseCards from "./Navigator/CourseCards.jsx"; //课程卡片

class App extends Component {
	render() {
		return (
			<div className="App" >
				<BrowserRouter>
                    <TopBar/>
					<Banner/>
					<CourseCards/>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;