import React from 'react';
import {Menu} from 'antd';
import './teachercss.css'

class Showthemenu extends React.Component{
    state={
        current:'introduce'
    }
    handleClick=e=>{
        this.setState({current:e.key});
    };
    render(){
        const {current}=this.state;
        return(
            <div class="teachermenu">
                <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[current]}>
                    <Menu.Item key="introduce">
                        教师简介
                    </Menu.Item>
                    <Menu.Item key="course">
                        主讲课程
                    </Menu.Item>
                </Menu>
            </div>

        )
    }
}
export default Showthemenu