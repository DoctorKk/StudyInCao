import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import menuList from './MenuList'
// 导入icon
import { SmileOutlined } from '@ant-design/icons';
import  * as Icon from '@ant-design/icons';
const { SubMenu } = Menu;

/**
* 导航栏,点击切换页面
*/

class TopMenu extends React.Component {
  state = {
    current: "courses",
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
               <Menu.Item key ={item.key} id = {item.id}>
                    <Link to={{ pathname: item.key, state: { id: item.title} }}>
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