import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import menuList from './MenuList'

class LeftNavi extends React.Component {
    state = {
        current: this.props.pageID,
    };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
        current: e.key,
      });
  };

  getMenuNodes = (menuList) =>{
    return menuList.map(item=>{
        return(
            <Menu.Item key ={item.key} id = {item.id}>
                <Link to={{ pathname: item.key, state: { id: item.id} }}>
                    <span>{item.title}</span>
                </Link>
            </Menu.Item>
        )
   })
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="inline"
        theme="bright"
      >
        {this.getMenuNodes(menuList)}
      </Menu>
    );
  }
}

export default LeftNavi