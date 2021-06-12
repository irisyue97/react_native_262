import React, {Component} from 'react';
import {View,Image, TouchableOpacity,Text, TextInput,StyleSheet,LogBox } from 'react-native';
import Button from 'react-native-button';
// Error Warning
LogBox.ignoreAllLogs();
export default class Thong_tin_Nguoi_dung extends Component{  
    constructor(props){
        super(props);
        const { Nguoi_dung} = this.props.route.params
        this.state={
            Ma_so:Nguoi_dung.Ma_so,
            Ho_ten:Nguoi_dung.Ho_ten,
        }
    }

    XL_Nhan(){
        this.props.navigation.goBack();
    }
    render(){
        return(                 
            <View style={style.container}>
                {/* <View style={{alignItems:"center",marginTop:20}}>
                    <Image style={style.image} source={require('../images/avatar-40.png')}></Image>  
                </View>  */}
                <View style={{flex:1, justifyContent:"flex-start"}}>
                    <TextInput editable = {false}
                        onChangeText={(Ma_so)=>this.setState({Ma_so})} value={this.state.Ma_so} 
                        placeholder='Mã số'  style={style.input}/>
                    <TextInput 
                        onChangeText={(Ho_ten)=>this.setState({Ho_ten})} value={this.state.Ho_ten} 
                        placeholder='Họ tên'  style={style.input}/>
                    <Button style={{fontSize:16, color:'#ffffff'}}
                        containerStyle={{
                                        padding:8, marginLeft:120, 
                                        marginRight:120, height:40, 
                                        borderRadius:5, backgroundColor:'#4387fd', marginTop:10}}
                        onPress={this.XL_Nhan.bind(this)}
                        
                    >
                            Đồng ý
                    </Button>
                </View>          
            </View>          
        );        
    }
}

const style= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#DFDFDF',
      justifyContent:'center'
    },
    inputContainer: {
        borderColor: '#ffffff',
        backgroundColor: '#4387fd',
        borderBottomWidth: 1,
        height:50,
        flexDirection: 'row',
        alignItems:'center',               
    },
    text:{
        marginRight:5, 
        borderBottomColor: '#FFFFFF', 
        flex:1, 
        color:'#ffffff', 
        fontSize:18, 
        textAlign:'center', 
        justifyContent:'center'  
    },
    inputIcon:{
        width:26, 
        height:26, 
        tintColor:'#ffffff', 
        marginLeft:5, 
        justifyContent: 'center'
    },

    input:{
        height:44,
        paddingHorizontal:10,
        backgroundColor:'#ffffff',
        margin:5,
        borderRadius:5
    },
    button:{
        height:46,
        borderRadius:5,
        borderWidth: 1,
        borderColor:'#ffffff',
        margin:5,
        backgroundColor:'#4387fd',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:100,
        width:100,
        marginBottom:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    }
})