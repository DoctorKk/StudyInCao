import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'antd';
import recCourses from './RecCourse';
import '../../asserts/css/Menu.css';
const { Meta } = Card;

/**
 * todo:
 * 1. 课程封面更换
 * 2. 路由跳转
 */
class CourseCards extends React.Component{
    getCardNodes = (Courses) => {
        return Courses.map(item=>{
            return(
                <Card hoverable style={{ width: 200, marginBottom:15}}
                 cover={<img alt={item.id} src={item.cover}/>}>
                <Meta title={item.name}   description={item.teacher} />
                <Link to={item.key}></Link>
                </Card>
            )
       })
    }


    render(){
        return(
            <div>
                <div class = "label"> 
                  <div style = {{ fontSize: 'x-large', paddingRight: '15px'}}>推荐课程</div>
                  <div style = {{ paddingLeft: '15px', borderLeftStyle:'solid', borderWidth:'1px'}}> <Link to= "/study/allCourses"> 更多课程 </Link>  </div>
                </div>
                <div class = "recCourses">            
                    {this.getCardNodes(recCourses)}
                </div>
            </div>
        )
    }
}

export default CourseCards