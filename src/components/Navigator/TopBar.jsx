import React from 'react';
import {Button,Input} from 'antd';
import TopMenu from './TopMenu';
import Logo from '../../asserts/logo.jpg';
import '../../asserts/css/Menu.css';
const { Search } = Input;
var storage = window.localStorage;

/**
 * logo + 导航栏
 * todo: 路由跳转
 */
class TopBar extends React.Component{
    // 控制后台菜单的显示
    state = {
        isLoggined:storage.hasOwnProperty("name")
    }

    Out=()=>{
        storage.removeItem("name")

        this.setState = {
            isLoginIn:false,
        }

        window.location.reload();
    }
    
    onSearch = value => console.log(value);

    render(){
        return(
            <div class = "header">
                <img class = "logo" src = {Logo} alt="校徽" />
                <div class = "title"> 学在曹楼 </div>
                <div style = {{alignSelf:'flex-end'}}> <TopMenu /> </div>
                <Search  placeholder="搜索感兴趣的课程" allowClear enterButton="Search" size="middle" style={{width:"30%"}} onSearch={this.onSearch} />
                <div style = {{marginLeft: "auto"}}>
                    <div>{
                        this.state.isLoggined?(
                            <Button type="primary" size="large" style={{marginLeft: "5px"}}> 登陆 </Button>
                            
                        ):(
                            <Button type="primary" size="large" onClick = {this.Out} style={{marginLeft: "5px"}}> 注销 </Button>
                        )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar