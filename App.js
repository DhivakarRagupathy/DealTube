import React, {Component} from 'react';
import MenuList from './Components/MenuList';
import {AppRegistry} from 'react-native';


export default class Menu extends Component {
  render () {
    return (
    
          <MenuList/>
     
     
    );
  }
}

AppRegistry.registerComponent('DealTube', () => Menu);