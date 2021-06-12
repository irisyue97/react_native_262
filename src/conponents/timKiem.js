import React, { Component } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class tim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Gia_tri_tim: '',
        };

    }
    Tim() {
        let Gia_tri_tim = this.state.Gia_tri_tim;
        this.props.data.Tim_Kiem(Gia_tri_tim)
    }
    render() {
        return (
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder={this.props.placeholder}
                        value={this.state.Gia_tri_tim}
                        onChangeText={value => this.setState({ Gia_tri_tim: value })}
                        onSubmitEditing={this.Tim.bind(this)}
                        placeholderTextColor="#3062b9"
                    />
                    <TouchableOpacity onPress={this.Tim.bind(this)} activeOpacity={0.5}>
                        <Text style={{paddingRight:8}}>
                            <FontAwesomeIcon icon={faSearch} style={styles.inputIcon} size={20} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#d6dfe9',
        borderBottomWidth: 1,
        borderRadius: 5,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#a1a1a1',
    },
    inputs: {
        height: 100,
        marginRight: 5,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        color: 'black',
        fontSize: 14,
        paddingRight: 8,
        paddingLeft:8

    },
    inputIcon: {
        color: '#3062b9',
    },
})