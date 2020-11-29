import React, {Component} from 'react';

//布局组件

import Showthestudent from "./studentshow";
import ShowthemenuStudent from "./studentmenu";
import Showthecourse from "../teacher/teachercourse";

class StudentTest extends Component {
	render() {
		return (
			<div >
				<Showthestudent/>
				<ShowthemenuStudent/>
				<Showthecourse/>
			</div>
		);
	}
}
export default StudentTest;