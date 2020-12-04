import React, {Component} from 'react';
import { Layout } from 'antd';
import LeftNavi from './LeftNavi.jsx'
import CourseContent from './CourseContent'
const { Sider, Content } = Layout;

/*
    课程详细信息页面
*/

class Course extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <Sider style = {{marginLeft:'10%'}} theme={"light"} ><LeftNavi /> </Sider>
                    <Content> <CourseContent pageID = {this.props.match.params.id} /> </Content>
                </Layout>
            </div>
        );
    }
}
export default Course;