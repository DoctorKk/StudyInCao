import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'antd';
import CourseList from './CourseList';
import '../../asserts/css/Menu.css';
const { Meta } = Card;

/**
 * todo:
 * 1. 课程封面更换
 * 2. 路由跳转
 */
class ListCourse extends React.Component{
    getCardNodes = (Courses, classification) => {
        return Courses.map(item=>{
				return(
					<Card hoverable style={{ width: 200, marginBottom:15}}
					 cover={<img alt={item.id} src={item.cover}/>}>
					<Meta title={item.name} />
					<Link to={item.key}></Link>
					<p> 教师姓名 </p>
					<p> 通识课 </p>
					</Card>
				)
       })
    }


    render(){
        return(
            <div>
                <div class = "recCourses">            
                    {this.getCardNodes(CourseList, this.props.pageID)}
                </div>
            </div>
        )
    }
}

export default ListCourse