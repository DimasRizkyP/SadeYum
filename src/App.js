
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Homescreen,Splashscreen } from './pages';
import { createStackNavigator } from '@react-navigation/stack'
import Router from './Router';



const App = () =>  {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
export default App;
