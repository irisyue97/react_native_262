import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import dsNguoidung from './src/stack/Danh_sach_Nguoi_dung';
import nguoiDung from './src/stack/Thong_tin_Nguoi_dung';
import dsTivi from './src/stack/Danh_sach_Tivi';
import Tivi from './src/stack/Thong_tin_Tivi';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: 180, padding: 10, backgroundColor: 'green', borderRadius: 5, margin: 5 }}>
        <TouchableOpacity onPress={() => navigation.navigate('dsNguoidung')}>
          <View style={{ alignItems: "center" }}>
            <Image source={require('./src/icons/time.png')}></Image>
            <Text style={{ color: "white", textAlign: "center" }}>Danh sách Người dùng</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: 180, padding: 10, backgroundColor: 'green', borderRadius: 5, margin: 5 }}>
        <TouchableOpacity onPress={() => navigation.navigate('dsTivi')}>
        <View style={{ alignItems: "center" }}>
            <Image source={require('./src/icons/settings.png')}></Image>
            <Text style={{ color: "white", textAlign: "center" }}>Danh sách Tivi</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>


  );
}
function App() {
  return (
    // <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'React Native Basic' }} />
        <Stack.Screen name="dsNguoidung" component={dsNguoidung} options={{ title: 'Danh sách Người dùng' }} />
        <Stack.Screen name="nguoiDung" component={nguoiDung} options={({ route }) => ({ title: route.params.Nguoi_dung.Ho_ten })} />
        <Stack.Screen name="dsTivi" component={dsTivi} options={{ title: 'Danh sách Tivi' }} />
        <Stack.Screen name="Tivi" component={Tivi} options={({ route }) => ({ title: route.params.Tivi.Ten })} />
      </Stack.Navigator>
    //</NavigationContainer>
  );
}

export default App;