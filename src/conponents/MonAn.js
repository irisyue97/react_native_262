import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

import Du_lieu from '../data/Xu_ly'
import { format_number } from '../data/Dung_chung';
import Tim from './timKiem';

const backgroundColor = "#007256";


class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            So: 0
        }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    {/* <View style={{ flex: 1, justifyContent: 'center', height: 50 }}>
                        <Text style={styles.itemText}>{this.props.item.Ten}</Text>
                    </View> */}

                    <View style={styles.categoriesItemContainer}>
                        <Image style={styles.categoriesPhoto} source={{ uri: this.props.item.Hinh }} />
                        <Text style={styles.categoriesName}>{this.props.item.Ten}</Text>
                        <Text style={styles.categoriesInfo}>Đơn giá: {format_number(this.props.item.Don_gia_Ban)} VND</Text>
                    </View>


                </View>
                {/* <View style={{ height: 1, backgroundColor: "#e6e5e5" }}></View> */}
            </View>
        );
    }

}
export default class Gio_hang extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Danh_sach_MonAn: Du_lieu.Danh_sach_MonAn,
            key: '',
            Gia_tri_tim: '',
        };
    }

    componentDidMount() {
        fetch('https://bai-thu-hoach-thuy.herokuapp.com/Danh_sach_MonAn')
            .then((response) => response.json())
            .then((responseData) => {
                Du_lieu.Danh_sach_MonAn = responseData;
                this.setState({ Danh_sach_MonAn: Du_lieu.Danh_sach_MonAn })
            })
            .catch((error) => {
                console.error(error);
            })
    }

    Tim_Kiem(gt) {
        let Gia_tri_tim = gt;
        let Danh_sach_MonAn = Du_lieu.Danh_sach_MonAn.filter(n => {
            return n.Ten.toLowerCase().includes(Gia_tri_tim.toLowerCase())
        })
        this.setState({ Danh_sach_MonAn: Danh_sach_MonAn })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#d6dfe9' }}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Danh sách Món ăn</Text>
                </View>
                    <View>
                        <Tim placeholder="Tìm tên Món ăn" data={this} />
                    </View>
                <FlatList
                    ref={'Th_Danh_sach'}
                    data={this.state.Danh_sach_MonAn}
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


const styles = StyleSheet.create({
    itemText: {
        color: "#000000",
        fontSize: 14
    },
    inputContainer: {
        borderColor: '#6b6b6b',
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
    inputIcon: {
        width: 26,
        height: 26,
        tintColor: '#ffffff',
        marginRight: 5,
        justifyContent: 'center'
    },

    categoriesItemContainer: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 215,
        borderColor: '#a1a1a1',
        borderWidth: 0.5,
        borderRadius: 20,
    },
    categoriesPhoto: {
        width: '100%',
        height: 155,
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    categoriesName: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#254c91',
        marginTop: 8
    },
    categoriesInfo: {
        marginTop: 3,
        marginBottom: 5
    }
})