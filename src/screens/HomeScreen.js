import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, parameters } from '../global/styles';
import CountDown from 'react-native-countdown-component';
import HomeHeader from '../components/HomeHeader';
import { filterData, restaurantsData } from '../global/Data';
import FoodCard from '../components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {

    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState("0")
    return ( 
        <View style = {styles.container}>
            <HomeHeader navigation = {navigation}/>

            <ScrollView
                stickyHeaderIndices = {[0]}
                showsVerticalScrollIndicator = {true}
            >
                <View style = {{backgroundColor: colors.cardbackground, paddingBottom: 51}}>
                    <View style = {{marginTop: 10, flexDirection: 'row', justifyContent: "space-evenly"}}> 
                        <TouchableOpacity
                            onPress = {()=>{
                                setDelivery(true)
                            }}
                        >
                            <View style = {{ ...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey4}}>
                                <Text style = {styles.deliveryText}>Giao hàng</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress = {()=>{
                                setDelivery(false)
                                navigation.navigate("RestaurantMapScreen")
                            }}
                        >
                            <View style = {{ ...styles.deliveryButton, backgroundColor: delivery ? colors.grey4 : colors.buttons}}>
                                <Text style = {styles.deliveryText}>Lấy hàng</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {styles.filterView}>
                    <View style = {styles.addressView}>
                        <View style = {{flexDirection: "row", alignItems: "center", paddingLeft: 10}}>
                            <Icon 
                                type = "material-community"
                                name = "map-marker"
                                color = {colors.grey1}
                                size = {26}
                            />

                            <Text style = {{marginLeft: 5}}>TP.HCM</Text>
                        </View>

                        <View style = {styles.clockView}>
                            <Icon 
                                type = "material-community"
                                name = "clock-time-four"
                                color = {colors.grey1}
                                size = {26}
                            />

                            <Text style = {{marginLeft: 5}}>Bây giờ</Text>
                        </View>
                    </View>

                    <View>
                    <Icon 
                                type = "material-community"
                                name = "tune"
                                color = {colors.grey1}
                                size = {26}
                            />
                    </View>
                </View>

                <View style = {styles.headerTextView}>
                    <Text style = {styles.headerText}>Phân loại</Text>
                </View>

                <View>
                    <FlatList 
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        data= {filterData}
                        keyExtractor = {(item)=>item.id}
                        extraData = {indexCheck}
                        renderItem = {({item, index})=>(
                            <Pressable
                                onPress = {()=>{setIndexCheck(item.id)}}
                            >
                                <View style = {indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                                    <Image 
                                        style = {{height: 60, width: 60, borderRadius: 30}}
                                        source = {item.image}
                                    />

                                    <View>
                                        <Text style = {indexCheck === item.id ? {...styles.smallCardTextSelected} : {...styles.smallCardText}}>{item.name}</Text>
                                    </View>
                                </View>

                               
                            </Pressable>
                        )}
                    />
                </View>

                <View style = {styles.headerTextView}>
                    <Text style = {styles.headerText}>Freeship</Text>
                </View>

                <View>
                    <View style = {{flexDirection: 'row', alignItems: "center"}}>
                            <Text style = {{marginLeft: 15, fontSize: 16, marginTop: -10, marginRight: 5, color: colors.buttons}}>FLASH SALE</Text>
                            <CountDown
                                until = {3600}
                                size = {14}
                                digitStyle = {{backgroundColor: colors.black}}
                                digitTxtStyle = {{color: colors.cardbackground}}
                                timeToShow = {['M', 'S']}
                                timeLables = {{m: 'Phút', s: 'Giây'}}
                            />
                    </View>

                    <FlatList 
                        style = {{marginTop: 10, marginBottom: 10}}
                        horizontal =  {true}
                        data = {restaurantsData}
                        keyExtractor = {(item, index)=>index.toString()}
                        showsHorizontalScrollIndicator = { false }
                        renderItem = {({item})=>(
                            <View style = {{ marginRight: 5 }}>
                                <FoodCard 
                                    screenWidth = {SCREEN_WIDTH * 0.8}
                                    images = {item.images}
                                    restaurantName = {item.restaurantName}
                                    farAway = {item.farAway}
                                    businessAddress = {item.businessAddress}
                                    averageReview = {item.averageReview}
                                    numberOfReview = {item.numberOfReview}
                                />
                            </View>
                        )}
                    />
                </View>

                <View style = {styles.headerTextView}>
                    <Text style = {styles.headerText}>Khuyến mãi</Text>
                </View>

                <View>
                    <FlatList 
                        style = {{marginTop: 10, marginBottom: 10}}
                        horizontal =  {true}
                        data = {restaurantsData}
                        keyExtractor = {(item, index)=>index.toString()}
                        showsHorizontalScrollIndicator = { false }
                        renderItem = {({item})=>(
                            <View style = {{ marginRight: 5 }}>
                                <FoodCard 
                                    screenWidth = {SCREEN_WIDTH * 0.8}
                                    images = {item.images}
                                    restaurantName = {item.restaurantName}
                                    farAway = {item.farAway}
                                    businessAddress = {item.businessAddress}
                                    averageReview = {item.averageReview}
                                    numberOfReview = {item.numberOfReview}
                                />
                            </View>
                        )}
                    />
                </View>
            
                <View style = {styles.headerTextView}>
                    <Text style = {styles.headerText}>Nhà hàng ở gần bạn</Text>
                </View>

                <View style = {{width: SCREEN_WIDTH, paddingTop: 10}}>
                        { 
                            restaurantsData.map(item => (
                                <View key = {item.id} style = {{paddingBottom: 20}}>
                                     <FoodCard 
                                    screenWidth = {SCREEN_WIDTH * 0.95}
                                    images = {item.images}
                                    restaurantName = {item.restaurantName}
                                    farAway = {item.farAway}
                                    businessAddress = {item.businessAddress}
                                    averageReview = {item.averageReview}
                                    numberOfReview = {item.numberOfReview}
                                />
                                </View>
                            ))
                        }
                </View>

            </ScrollView>

            { delivery &&         
            <View style = {styles.floatButton}>
                <TouchableOpacity
                    onPress ={()=>{
                        navigation.navigate('RestaurantMapScreen');
                    }}
            >
                    <Icon 
                        name = "place"
                        type = "material"
                        size = {32}
                        color = {colors.buttons}
                    />

                    <Text style = {{color: colors.grey2}}>Bản đồ</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },

    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5
    },

    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    },

    filterView: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-evenly", 
        marginHorizontal: 10, 
        marginVertical: 10
    },

    clockView: {
        flexDirection: "row", 
        alignItems: 'center', 
        marginLeft: 20, 
        backgroundColor: 
        colors.cardbackground,
        borderRadius: 15,
        paddingHorizontal: 5,
        marginRight: 20
    },

    addressView: {
        flexDirection: "row", 
        backgroundColor: colors.grey5, 
        borderRadius: 15, 
        paddingVertical: 3,
        justifyContent: "space-between",
        paddingHorizontal: 20
    },

    headerText: {
        color: colors.buttons,
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 10
    },
    
    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 2,
    },

    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: "center",
        alignItems: 'center',
        padding: 5,
        widh: 80,
        margin: 10,
        height: 100
    },

    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignItems: 'center',
        padding: 5,
        widh: 80,
        margin: 10,
        height: 100
    },

    smallCardTextSelected: {
        fontWeight: "bold",
        color: colors.cardbackground
    },

    smallCardText: {
        fontWeight: "bold",
        color: colors.grey2
    },

    floatButton:{
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: 'white',
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center'
    }
}) 
