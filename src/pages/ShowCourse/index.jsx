import React, {Component} from 'react';
import { Layout } from 'antd';
import LeftNavi from './LeftNavi.jsx'
import ListCourse from './ListCourse.jsx'

class ShowCourse extends Component {
	render() {
		return (
		 <ListCourse pageID = {this.props.match.params.id} />
		);
	}
}
export default ShowCourse;