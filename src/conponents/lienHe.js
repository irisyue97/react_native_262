import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { LienHeStyle } from '../styles/lienHeStyle';

export default class lienHe extends Component {
    constructor(props) {
        super(props);
        this.state = { Ho_ten: '', SDT: '', Dia_chi: '' }
    };

    render() {
        return (
            <View style={LienHeStyle.container}>
                <View style={LienHeStyle.textBody}>
                    <Text style={LienHeStyle.categoriesName}>Thông tin liên hệ khách hàng</Text>
                    <View style={{ flex: 1, justifyContent: "flex-start" }}>
                        <TextInput onChangeText={(Ho_ten) => this.setState({ Ho_ten })}
                            value={this.state.Ho_ten} placeholder='Họ & Tên' style={LienHeStyle.input} />
                        <TextInput onChangeText={(SDT) => this.setState({ SDT })}
                            value={this.state.SDT} placeholder='Số điện thoại' style={LienHeStyle.input} />
                        <TextInput onChangeText={(Mat_khau) => this.setState({ Mat_khau })}
                            value={this.state.Mat_khau} placeholder='Tỉnh/Thành phố' style={LienHeStyle.input}  />
                        <TextInput onChangeText={(Quan) => this.setState({ Quan })}
                            value={this.state.Quan} placeholder='Quận/Huyện' style={LienHeStyle.input}  />
                        <TextInput onChangeText={(Dia_chi) => this.setState({ Dia_chi })}
                            value={this.state.Dia_chi} placeholder='Địa chỉ cụ thể' style={LienHeStyle.input}  />
                        <TouchableOpacity onPress={() => this.XL_Nhan()} activeOpacity={0.5}>
                            <View style={LienHeStyle.button}>
                                <Text style={LienHeStyle.text}>Xác nhận</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <Text style={{ textAlign: "center", color: "white", fontStyle: "italic" }}>
                            {this.state.Thong_bao}
                        </Text> */}
                    </View></View>
                <Image style={LienHeStyle.imageBg} source={require('../../assets/images/background.png')}></Image>

            </View>
        );
    }


    XL_Nhan() {
        Alert.alert(
            "Xác nhận thông báo thành công", 
            "Chúng tôi sẽ liên lạc với " + this.state.Ho_ten + " ngay khi có thể!",
            [
                {text:"Đồng ý", onPress:() =>{console.log("Chọn No")}, style:"cancel"},
                
            ],
            {cancelable:true}
        );
    }
}


