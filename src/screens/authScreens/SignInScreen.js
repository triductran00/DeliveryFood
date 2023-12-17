import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters, title} from "../../global/styles";
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
 export default function SignInScreen() {

    const[textInput2Foccued, setTextInput2Foccued] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View style = {styles.container}>
            <Header title="MY ACCOUNT" type = "arrow-left"/>

            <View style = {{marginLeft: 20, marginTop: 10}}>
                <Text style = {title}>Sign-In</Text>
            </View>

            <View style = {{alignItems: "center",marginTop: 10}}>
                <Text style = {styles.text1}>Hãy nhập email và password</Text>
                <Text style = {styles.text1}>đã đăng ký với tài khoản của bạn</Text>
            </View>

            <View style = {{marginTop: 20}}>
                <View>
                    <TextInput 
                        style = {styles.TextInput1}
                        placeholder = "Email" 
                        ref = {textInput1}              
                    />
                </View>

                <View style = {styles.TextInput2}>
                        <Animatable.View  animation = {textInput2Foccued ? "" : "fadeInLeft"} duration = {400}>
                            <Icon 
                                name = "lock"
                                iconStyle = {{color: colors.grey3}}
                                type = "material"
                                style = {{}}
                            />
                        </Animatable.View>

                        <TextInput 
                            style = {{width: "80%"}}
                            placeholder = "Password"       
                            ref = {textInput2}      
                            onFocus= {()=>{
                                setTextInput2Foccued(false)
                            }}

                            onBlur = {()=>{
                                setTextInput2Foccued(true)
                            }}
                        />

                        <Animatable.View animation = {textInput2Foccued ? "" : "fadeInLeft"} duration = {400}>
                            <Icon 
                                name = "visibility-off"
                                iconStyle = {{color: colors.grey3}}
                                type = "material"
                                style = {{marginRight: 10}}
                            />
                        </Animatable.View>
                    </View>
                </View>

                <View style = {{marginHorizontal: 20, marginTop: 30}}>
                    <Button 
                         title = "SIGN IN"
                         buttonStyle = {parameters.styledButton}
                         titleStyle = {parameters.buttonTitle }

                    />
                </View>

                <View style = {{alignItems: "center", marginTop: 15}}>
                    <Text style = {{...styles.text1, textDecorationLine: "underline"}} >Forgot Password?</Text>
                </View>

                <View style = {{alignItems: "center", marginTop: 30, marginBottom: 30}}>
                    <Text style = {{fontSize: 20, fontWeight: "bold"}}>OR</Text>
                </View>
                
                <View style = {{marginHorizontal: 10, marginTop: 10}}>
                    <SocialIcon 
                        title = "Sign In With Facebook"
                        button 
                        type = "facebook"
                        style = {styles.SocialIcon}
                        onPress = {()=>{}}
                    />
                </View>

                <View style = {{marginHorizontal: 10, marginTop: 10}}>
                    <SocialIcon 
                        title = "Sign In With  Google"
                        button 
                        type = "google"
                        style = {styles.SocialIcon}
                        onPress = {()=>{}}
                    />
                </View>

                <View style = {{marginTop: 25, marginLeft: 20}}>
                    <Text style = {{...styles.text1}} >Chưa có tài khoản?</Text>
                </View>

                <View style = {{alignItems: "flex-end", marginHorizontal: 20}}>
                    <Button 
                       title = "Tạo tài khoản"
                       buttonStyle = {styles.createButton}
                       titleStyle = {styles.createButtonTitle}
                    />
                </View>
        </View>
    )
 }

 const styles = StyleSheet.create({
    container: {
        flex:1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },

    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15
    },

    SocialIcon: {
        borderRadius: 12,
        height: 50
    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidrh: 1,
        borderColor: "#ff8c52",
        height: 48,
        paddingHorizontal: 20,
    },

    createButtonTitle: {
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
 })