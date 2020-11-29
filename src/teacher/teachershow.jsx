import React from 'react';
import picurl from './panda.jpg'
import {Avatar, Image} from 'antd';
import {Row,Col} from 'antd';
import './teachercss.css'



class Showtheteacher extends React.Component{
    render(){
        return(
            <div class="Teachers">
                <Row>
                    <Col span={2} offset={3}>
                        <div class="Img">
                            <Avatar  size={100} src={picurl}/>
                        </div>
                    </Col>
                    <Col span={6} offset={1}>
                        <div class="Img">
                            <h1 className="Namefont">教师姓名</h1>
                            <h3 className="Namefont">浙江大学-职称</h3>
                            <h4>所属学院</h4>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Showtheteacher
