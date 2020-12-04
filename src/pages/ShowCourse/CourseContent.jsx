
import { List } from 'antd/lib/form/Form';
import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../asserts/logo.jpg';
import CourseList from './CourseList';
import {Avatar, Image} from 'antd';
import {Row,Col} from 'antd';
import '../../asserts/css/Course.css';

class CourseContent extends  React.Component{
    render(){
        return(
            <div>
               <div  class="courseContent">
               <Row>
                   <Col>
                    <div class='courseImg'>
                        <Avatar size={150} src={Logo}/> 
                    </div>
                   </Col>
                   <Col>
                        <div>
                            <h1 class='courseTitle'>{CourseList[this.props.pageID-1].name}</h1>
                        </div>
                        <div class='courseDescription'>
                            {CourseList[this.props.pageID-1].description}
                        </div>
                   </Col>
               </Row>
               </div>
                    
                <div class='message'>
                    <div class='courseMessage'>
                            <span class='subTitle'>
                                <p>
                                    课程介绍
                                </p>
                            </span>
                            <span>
                                {CourseList[this.props.pageID-1].introduce}
                            </span>
                            <br/>
                            <span class='subTitle'>
                                <p>
                                    预修要求
                                </p>
                            </span>
                            <span>
                                {CourseList[this.props.pageID-1].request}
                            </span>
                            <br/>
                            <span class='subTitle'>
                                <p>
                                    课时安排
                                </p>
                            </span>
                            <span>
                                {CourseList[this.props.pageID-1].schedule}
                            </span>
                            <br/>
                            <span class='subTitle'>
                                <p>
                                    所用教材
                                </p>
                            </span>
                            <span>
                                {CourseList[this.props.pageID-1].material}
                            </span>
                            <br/>
                            <span class='subTitle'>
                                <p>
                                    教学安排
                                </p>
                            </span>
                            <span>
                                {CourseList[this.props.pageID-1].plan}
                            </span>
                            <br/>
                            <span class='subTitle'>
                                <p>
                                    考核方式
                                </p>
                            </span>
                            <span>
                                {CourseList[this.props.pageID-1].exam}
                            </span>
                            
                    </div>
                    <div class='teacherMessage'>
                        <Row>
                            <Col>
                                <div class='courseImg'>
                                    <Avatar size={80} src={Logo}/> 
                                </div>
                            </Col>
                            <Col>
                                <h2 class='teacherName'>
                                {CourseList[this.props.pageID-1].teacher}
                                </h2>
                            </Col>
                        </Row>
                        <div class='teacherDescription'>
                            <span>教师介绍blablablablabla</span>
                        </div>

                    </div>
                </div>

               
               
            </div>
        );
    }
}

export default CourseContent