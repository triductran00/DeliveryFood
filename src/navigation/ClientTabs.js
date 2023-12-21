import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/authScreens/HomeScreen';
import SearchScreen from '../screens/authScreens/SearchScreen';
import MyOrdersScreen from '../screens/authScreens/MyOrdersScreen';
import MyAccountScreen from '../screens/authScreens/MyAccountScreen';
import RestaurantsMapScreen from '../screens/authScreens/RestaurantsMapScreen';

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
                component = {HomeScreen}
                options = {
                    {
                        tabBarLabel: "Home",
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
                name = "SearchScreen"
                component = {SearchScreen}
                options = {
                    {
                        tabBarLabel: "Tìm kiếm",
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
                component = {MyOrdersScreen}
                options = { 
                    {
                        tabBarLabel: "Đơn hàng",
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
                name ="My Account"
                component = {MyAccountScreen}
                options = {
                    {
                        tabBarLabel: "Tôi",
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