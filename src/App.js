// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { Splashscreen,Resepp} from './pages';
// import { createStackNavigator } from '@react-navigation/stack'
// import Router from './Router';

// const App = () =>  {
//   return (
//     <NavigationContainer>
//       <Router />
//     </NavigationContainer>
//   );
// };
// export default App;

import * as React from 'react';
import {Homescreen, Splashscreen,Recipe,Profile} from './pages';
export default function App() {
  return <Splashscreen/>;
}
