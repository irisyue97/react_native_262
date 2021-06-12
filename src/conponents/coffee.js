import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import Du_lieu from '../data/Xu_ly';
import { CoffeeStyle } from '../styles/coffeeStyle';
import { format_number } from '../data/Dung_chung';
import Tim from './timKiem';

const backgroundColor = "#007256";


class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            So: 0,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.photo} source={{ uri: this.props.item.Hinh }} />
                <Text style={styles.title}>{this.props.item.Ten}</Text>
                <Text style={styles.category}>Đơn giá: {format_number(this.props.item.Don_gia_Ban)} VND</Text>
            </View>
        );
    }

}
export default class Gio_hang extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Danh_sach_Cafe: Du_lieu.Danh_sach_Cafe,
            key: '',
            Gia_tri_tim: '',
        };
    }

    Tim_Kiem(gt) {
        let Gia_tri_tim = gt;
        let Danh_sach_Cafe = Du_lieu.Danh_sach_Cafe.filter(n => {
            return n.Ten.toLowerCase().includes(Gia_tri_tim.toLowerCase())
        })
        this.setState({ Danh_sach_Cafe: Danh_sach_Cafe })
    }

    componentDidMount() {
        fetch('https://bai-thu-hoach-thuy.herokuapp.com/Danh_sach_Cafe')
            .then((response) => response.json())
            .then((responseData) => {
                Du_lieu.Danh_sach_Cafe = responseData;
                this.setState({ Danh_sach_Cafe: Du_lieu.Danh_sach_Cafe })
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        if (this.state.Danh_sach_Cafe.lenght === 0) {
            return (
                <View style={{ flex: 1 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        } else {
            return (
                <View style={{ backgroundColor: '#d6dfe9' }}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Danh sách Coffee</Text>
                    </View>
                    <View>
                        <Tim placeholder="Tìm tên Coffee" data={this} />
                    </View>

                    <FlatList
                        vertical
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        ref={'Th_Danh_sach'}
                        data={this.state.Danh_sach_Cafe}
                        extraData={this.state.key}
                        keyExtractor={(item) => item.Ma_so}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItem item={item} index={index} parentFlatList={this}></FlatListItem>
                            );
                        }}>
                    </FlatList>
                </View>
            );
        }
    }
}



const styles = StyleSheet.create({
    itemText: {
        color: "#000000",
        fontSize: 14
    },
    search: {
        color:"#4387fd"
    },
    inputContainer: {
        borderColor: '#b9b7b7',
        backgroundColor: '#4387fd',
        borderBottomWidth: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginRight: 5,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center'
    },

    container: CoffeeStyle.container,
    photo: CoffeeStyle.photo,
    title: CoffeeStyle.title,
    category: CoffeeStyle.category
})