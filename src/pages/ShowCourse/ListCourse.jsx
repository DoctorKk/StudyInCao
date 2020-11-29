import React from 'react';
import {Link} from 'react-router-dom';
import { List, Avatar} from 'antd';
import Logo from '../../asserts/logo.jpg';
import CourseList from './CourseList';
import '../../asserts/css/Course.css';

/**
 * todo:
 * 1. 根据类别显示不同课程
 * 2. 路由跳转
 */
class ListCourse extends React.Component{
    getCardNodes = (Courses, classification) => {
        return Courses.map(item=>{
       })
    }

    render(){
        return(
            <div className="showCourse">
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
                }}
                dataSource={CourseList}
                renderItem={item => (
                <List.Item
                    key={item.id}
                >
                <List.Item.Meta
                avatar={<Avatar src={Logo} />}
                title={<a href={item.key}>{item.name}</a>}
                description={item.teacher +"\t" +item.general}
                />
                {item.description}
                </List.Item>
                )}
            />
            </div>
        )
    }
}

export default ListCourse