import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Homescreen,Splashscreen } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () =>{
    return(
        <table.Navigator>
            <Tab.Screen name="home" component={Resep} />
            <Tab.Screen name="home" component={Artikel} />
        </table.Navigator>
    )
}
const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splashscreen" component={Splashscreen} options={{ headerShown:false }}/>
            <Stack.Screen name="Homescreen" component={Homescreen} options={{ headerShown:false }}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown:false }}/>
        </Stack.Navigator>
    )
}
export default Router;  