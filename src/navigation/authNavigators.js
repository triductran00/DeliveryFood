import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/authScreens/HomeScreen';
import RootClientTabs from './ClientTabs';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator>
            <Auth.Screen 
                name = "SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                options = {{
                    headerShown: false,
                    animation: 'fade_from_bottom'
                }}
            />
        

            <Auth.Screen 
                name = "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown: false,
                    animation: 'fade_from_bottom'
                }}
            />

            <Auth.Screen 
                name = "RootClientTabs"
                component = {RootClientTabs}
                options = {{
                    headerShown: false,
                    animation: 'fade_from_bottom'
                }}
            />

        </Auth.Navigator>
    )
}