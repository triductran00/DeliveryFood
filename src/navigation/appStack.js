import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';

const App = createNativeStackNavigator();

export function AppStack(){

return(
<App.Navigator>
 <App.Screen 
 name ="App"
 component ={DrawerNavigator}
 options ={{
     headerShown: false,
     animation: 'fade_from_bottom'
 }}
/> 

<App.Screen 
 name ="RestaurantMapScreen"
 component = {RestaurantsMapScreen}
 options ={{
     headerShown: false,
     animation: 'fade_from_bottom'
 }}
/> 

</App.Navigator>
)
}