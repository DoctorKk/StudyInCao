import React from 'react';
import {Menu} from 'antd';
import './studentcss.css'

class ShowthemenuStudent extends React.Component{
    state={
        current:'course'
    }
    handleClick=e=>{
        this.setState({current:e.key});
    };
    render(){
        const {current}=this.state;
        return(
            <div class="studentmenu">
                <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[current]}>
                    <Menu.Item class="Item" key="course">
                        我的课程
                    </Menu.Item>
                </Menu>
            </div>

        )
    }
}
export default ShowthemenuStudent