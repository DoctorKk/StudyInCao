import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import menuList from './MenuList'
// 导入icon
import { SmileOutlined } from '@ant-design/icons';
import  * as Icon from '@ant-design/icons';
const { SubMenu } = Menu;

/**
* 导航栏
* 选择项目可以切换页面
* todo：路由跳转
*/

class TopMenu extends React.Component {
  state = {
    current: "sourses",
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  getMenuNodes = (menuList) =>{
    return menuList.map(item=>{
        if(!item.children){
            return(
               <Menu.Item key ={item.key}>
                    <Link to={item.key}>
                      {
                        React.createElement(
                          item.icon !=='' ? Icon[item.icon] : SmileOutlined
                        )
                      }
                      <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            )
        }else{
            return(
                <SubMenu key={item.key}  title={
                    <span>
                    {
                        React.createElement(
                          item.icon !=='' ? Icon[item.icon] : SmileOutlined
                        )
                      }
                    <span>{item.title}</span>
                    </span>
                }>
                  {this.getMenuNodes(item.children)}
                </SubMenu>
           )
       }
   })
  }

  render() {
    //const path = this.props.location.pathname;

    return (
      <div className="TopBar">
             <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                {this.getMenuNodes(menuList)}
             </Menu>
      </div>
    );
  }
}

export default TopMenu