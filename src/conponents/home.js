import React, { Component } from 'react';
import { Image, Text, View, Button, StyleSheet } from 'react-native';

const backgroundColor = "#0067a7";


export default class Chinh extends Component {

    render() {
        return (
            <View>
                <Image style={style.logo} source={require('../../assets/images/white-logo.png')}></Image>

                <View style={style.textBody}>
                    <Text style={style.textSmall}>Họ và tên</Text>
                    <Text style={style.textLage}>Lê Nguyễn Thanh Thùy</Text>
                    <Text style={style.hr}></Text>
                    <Text style={style.textSmall}>Email</Text>
                    <Text style={style.textLage}>lntt.thuy@gmail.com</Text>
                    <Text style={style.hr}></Text>
                    <Text style={style.textSmall}>Sđt</Text>
                    <Text style={style.textLage}>0358756890</Text>
                    <Text style={style.hr}></Text>
                </View>
                <Image style={style.imageBg} source={require('../../assets/images/background.png')}></Image>

            </View>
        );
    }
}



const style = StyleSheet.create({
    imageBg: {
        width: '100%', height: '100%',
        position: 'relative',
    },
    logo: {
        zIndex: 2,
        position: 'absolute',
        left:-40,
        transform: ([{ scale: 0.5 }]),
    },
    textBody: {
        zIndex: 2,
        position: 'absolute',
        top: 300,
        left: 80
    },
    textSmall: {
        fontSize: 15,
        color: 'white'
    },
    textLage: {
        fontSize: 22,
        color: 'white'
    },
    hr: {
        paddingTop:3,
        borderTopColor: 'white',
        borderTopWidth: 1
    }

})

