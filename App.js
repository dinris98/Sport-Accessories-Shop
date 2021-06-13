import { StatusBar } from 'expo-status-bar';
import React, {Component}from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Button,ScrollView,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails1 from './ProductDetails1';
import ProductDetails2 from './ProductDetails2';
import ProductDetails3 from './ProductDetails3';


function MainPage({ navigation }) {
  return (
    
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
      <Text style={styles.h1}>SPORT ACCESSORY SHOP</Text>
      </View>
      <View style={styles.nice}>
        <Text style={styles.h4}>
        SAVE UP TO 40%
        </Text>
        <Text style={styles.h5}>
        WITH MINIMUM PURCHASE OF RM 500
        </Text>
      </View>
      
        <Text style={styles.h2}>
          TRENDING
        </Text>
        <View style={styles.box}>
        <Image style={styles.img}
        source={require("./assets/1.jpg")}>
        </Image>
        <Text style={styles.h3}>
          Nike SuperRep Go
        </Text>
        <Text style={styles.h3}>
          RM 500
        </Text>
        <Button
        title="Buy Now"
        onPress={() => navigation.navigate('ProductDetails1')}>
        </Button>
        </View>
        <View style={styles.box2}>
        <Image style={styles.img}
        source={require("./assets/2.jpg")}>
        </Image>
        <Text style={styles.h3}>
        Nike Air Zoom LWP
        </Text>
        <Text style={styles.h3}>
          RM 200
        </Text>
        <Button
        title="Buy Now"
        onPress={() => navigation.navigate('ProductDetails2')}>
        </Button>
        </View>

        <View style={styles.box}>
        <Image style={styles.img}
        source={require("./assets/3.jpg")}>
        </Image>
        <Text style={styles.h3}>
        Nike Vaporfly
        </Text>
        <Text style={styles.h3}>
          RM 240
        </Text>
        <Button
        title="Buy Now"
        onPress={() => navigation.navigate('ProductDetails3')}>
        </Button>
        </View>
        <View style={styles.end}>
        <Text>
          Alright reserve
        </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        
      },
      header:{
        padding:10,
        backgroundColor: '#00FFFF',
        height:150,
        width:'auto',
        alignItems: 'center',
        justifyContent:'center',
        alignSelf:'center',
        alignContent:'center',
    
      },
      h1:{
        fontSize: 35,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf:'center',
        alignContent:'center',
        color: 'white',
        margin:10,
        paddingTop:10,
        fontWeight:'bold',
        
      },
      button:{
        height:10,
        width: 20,
        backgroundColor:'black',
        color:'white',

      },
      h2:{
        fontSize:25,
        padding:10,
        margin:18,
        fontWeight:'bold',
        
      },
      box:{
        padding:20,
        margin:10,
        width:400, 
        height: 300, backgroundColor:'#D8DEE3',
        alignItems:'center',alignSelf:'center'
      },
      box2:{
        padding:20,
        margin:10,
        width:400, 
        height: 300, backgroundColor:'#F0FFFF',
        alignItems:'center',alignSelf:'center',
        shadowColor:'black',
        borderStyle:'solid',
        borderRadius:3,
        borderWidth:1,
        
      },
      img:{
        margin:10,
        height:110,
        width:200,
        opacity:2,
      },
      h3:{
        fontSize: 20,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf:'center',
        color: 'white',
        margin:3,
        padding:5,
        textShadowColor:'black',
        textShadowRadius:5,
    

      },
      end:{
        padding:10,
        backgroundColor: 'black',
        height:100,
        width:'auto',
      },
      nice:{
        height:80,
        width:'auto',
        backgroundColor:'#F0F8FF'
      },
      h4:{
        fontSize: 20,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf:'center',
        color: 'black',
        margin:3,
        padding:5,
        textShadowColor:'white',
        textShadowRadius:5,
      },
      h5:{
        fontSize: 18,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf:'center',
        color: 'black',
        margin:3,
        padding:5,
        textShadowColor:'white',
        textShadowRadius:5,
      }
      
    });

const Stack= createStackNavigator();
export default class App extends Component {

  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage}
        options={{
          headerStyle:{backgroundColor:'black'}
        }}/>
        <Stack.Screen name="ProductDetails1" component={ProductDetails1}/>
        <Stack.Screen name="ProductDetails2" component={ProductDetails2}/>
        <Stack.Screen name="ProductDetails3" component={ProductDetails3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}



