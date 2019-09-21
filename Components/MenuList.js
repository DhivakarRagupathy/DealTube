import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Dashboard from './Home';
import LoginForm from './LoginForm';

const RootStack= createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Home',
    }, 
  
  }, 
    LoginForm: {
      screen: LoginForm,
      navigationOptions: {
        title: 'Logout',
      },     
    },
}, {
    initialRouteName: 'LoginForm',
    
},
);
export default class MenuList extends React.Component {
    render() {
    
      return(
        
        <Dashboard />
        
      );
    }
  }