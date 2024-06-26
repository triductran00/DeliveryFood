import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/authScreens/HomeScreen'
import SearchScreen from '../screens/authScreens/SearchScreen'
import MyOrdersScreen from '../screens/authScreens/MyOrdersScreen'
import MyAccountScreen from '../screens/authScreens/MyAccountScreen'
import { ClientStack } from './clientStack';

const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs(){

    return(
        <ClientTabs.Navigator
                    tabBarOptions = {{
                        activeTintColor :colors.buttons
                    }}
                >
            <ClientTabs.Screen 
                name ="HomeScreen"
                component ={HomeScreen}
                options ={
                    {
                        tabBarLabel : "Home",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        ),
                        headerShown: false
                    }
                }
            />

            <ClientTabs.Screen 
                name ="SearchScreen"
                component = {SearchScreen}
                options ={
                    {
                        tabBarLabel : "Search",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='search'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        ),
                        headerShown: false
                    }
                }

            />

        <ClientTabs.Screen 
                name ="MyOrdersScreen"
                component ={MyOrdersScreen}
                options ={
                    {
                        tabBarLabel : "My Orders",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='view-list'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        ),
                        headerShown: false
                    }
                }

            />

        <ClientTabs.Screen 
                name ="MyAccount"
                component ={MyAccountScreen}
                options ={
                    {
                        tabBarLabel : "My Account",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        ),
                        headerShown: false
                    }
                }

            />
        </ClientTabs.Navigator>
    )
}