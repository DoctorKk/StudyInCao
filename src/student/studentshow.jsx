import React from 'react';
import picurl from './panda.jpg'
import {Avatar, Image} from 'antd';
import {Row,Col} from 'antd';
import './studentcss.css'



class Showthestudent extends React.Component{
    render(){
        return(
            <div class="Teachers">
                <Row>
                    <Col span={2} offset={3}>
                        <div class="Img">
                            <Avatar  size={100} src={picurl}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div class="Img">
                            <h1 className="Namefont">学生姓名</h1>
                            <h3 className="Namefont">所属学院</h3>
                        </div>
                    </Col>
                    <Col span={6} offset={4} >
                        <div class="coursenum">
                            <h2 className="Namefont">课程总数：</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Showthestudent
