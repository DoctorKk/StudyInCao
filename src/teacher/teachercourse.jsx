import React from 'react';
import {Card,Row,Col} from 'antd';
import url from '../asserts/logo.jpg'
import './teachercss.css'
const{Meta}=Card;

class Showthecourse extends React.Component{
    render(){
        return(
            <div class="carddiv">
                <Row gutter={16}>
                    <Col span={6}>
                        <Card style={{width:200}} hoverable cover={<img  src={url}/>}>
                            <Meta title="课程1" description="学习软件需求"/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{width:200}} hoverable cover={<img  src={url}/>}>
                            <Meta title="课程2" description="学习软件管理"/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Showthecourse