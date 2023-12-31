import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Splashscreen, Recipe, Profile, Detail, Lontong, Search,AddBlogForm,EditBlogForm,BlogDetail,Register,Login} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/Homescreen';
import {fontType, colors} from '../theme';
import {Home3, BagCross, ProfileCircle} from 'iconsax-react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.green(),
        tabBarInactiveTintColor: colors.black(),
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
          fontFamily: fontType['Pjs-Medium'],
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home3
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Recipe"
        component={Recipe}
        options={{
          tabBarLabel: 'Daftar Resep',
          tabBarIcon: ({focused, color}) => (
            <BagCross
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({route}) => ({
          tabBarLabel: route.name === 'Profile' ? 'Profile' : 'Bookmark',
          tabBarIcon: ({focused, color}) => (
            <ProfileCircle
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Lontong" component={Lontong} />
      <Stack.Screen
        name="SearchPage"
        component={Search}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
      />
      {/* <Stack.Screen name="Recipe" component={Recipe} options={{ headerShown:false }}/>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown:false }}/> */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddBlog"
        component={AddBlogForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection : 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="EditBlog"
        component={EditBlogForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
            <Stack.Screen
        name="BlogDetail"
        component={BlogDetail}
        options={{
          headerShown: false, 
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection : 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }} 
      />
    </Stack.Navigator>
  );
};
export default Router;