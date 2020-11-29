import React, {Component} from 'react';
import { Layout } from 'antd';
import LeftNavi from './LeftNavi.jsx'
import ListCourse from './ListCourse.jsx'
const { Sider, Content } = Layout;

class ShowCourse extends Component {
	render() {
		return (
		<div>
			<Layout>
				<Sider style = {{marginLeft:'10%'}} theme={"light"} ><LeftNavi /> </Sider>
				<Content> <ListCourse pageID = {this.props.match.params.id} /> </Content>
			</Layout>
		 </div>
		);
	}
}
export default ShowCourse;