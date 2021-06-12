import * as React from 'react';
import { Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Chinh from './src/tabs/MH_Chinh';
// import Gio_hang from './src/tabs/MH_Gio_hang';
import Tim_kiem from './src/tabs/MH_Tim_kiem';
import Lien_he from './src/tabs/MH_Lien_he';

import stackNavigation from './stackNavigation';

//
import Home from './src/conponents/home'
import MonAn from './src/conponents/MonAn';
import Coffee from './src/conponents/coffee';
import LienHe from './src/conponents/lienHe';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCampground } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const backgroundColor = "#0067a7";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Chinh"
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
                    labelStyle: {
                        fontSize: 16,
                    }
                }}

                
            >
                <Tab.Screen name="Home" component={Home} 
                    options={{
                        tabBarIcon: () => {
                            return <FontAwesomeIcon icon={ faHome } style={style.icon}  size={ 23 }/>
                        },
                        title:"Giới thiệu"
                    }}

                    navigation={NavigationContainer.navigation}
                />
                <Tab.Screen name="Cafe" component={Coffee}
                    options={{
                        tabBarIcon: () => {
                            return <FontAwesomeIcon icon={ faCoffee } style={style.icon}  size={ 23 }/>
                        },
                        title:"Cafe"
                    }}
                />
                <Tab.Screen name="MonAn" component={MonAn}
                    options={{
                        tabBarIcon: () => {
                            return  <FontAwesomeIcon icon={ faCampground } style={style.icon}  size={ 23 }/>
                        },
                        title:"Món ăn"
                    }}
                />
                <Tab.Screen name="LienHe" component={LienHe}
                    options={{
                        tabBarIcon: () => {
                            return  <FontAwesomeIcon icon={ faAddressBook } style={style.icon}  size={ 23 }/>
                        },
                        title:"Liên hệ"
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}



const style = StyleSheet.create({
    icon: {
        color: '#0781B1'
    },

})
