import React,{ Component } from "react";
import { ImageBackground, StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';

//Change Product Image here

 class ProductDetails1 extends Component{

  constructor(props) {
      super(props);
      this.state = {
        image : { 
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzdl0i2f66gHim1RlIAO7oUInMBwsOCAGww&usqp=CAU"},
        titleText: 'Nike SuperRep Go',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in risus eu metus suscipit volutpat. Vestibulum venenatis porta massa vitae faucibus. Integer nec velit ante. Vivamus nisl justo, aliquam ac ipsum quis, iaculis sodales arcu. Phasellus nec blandit nisl, eu ultrices libero. Donec scelerisque erat a est rutrum rhoncus. Curabitur in justo rutrum, tincidunt sem a, ultricies massa. Mauris vitae quam vitae neque fringilla mollis eu vitae turpis.'
      };
    }

    render() {
    return (
      <View style={styles.page}>
        <View style={styles.pictureContainer}>
          <TouchableOpacity 
            style={styles.exitButton}
            //Exit button funtion here
            onPress={() => Alert.alert('Exit button pressed')}
            >
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
            <ImageBackground source={this.state.image} style={styles.pictureContainer}></ImageBackground>
        </View>
        
        <ScrollView  style={styles.descriptionContainer}>
          <Text style={styles.titleText}>
            {this.state.titleText}
          </Text>
          
          <Text>
            {"\n"}
            {this.state.bodyText}
          </Text>

        </ScrollView >
        <View style={styles.buttonContainer}>
          
          <TouchableOpacity 
            style={styles.toCartButton}
            //Add to Cart funtion here
            onPress={() => Alert.alert('Add to Cart button pressed')}
          >
            <Text style={styles.buttonText}>Add To Cart</Text>
          </TouchableOpacity> 

          <TouchableOpacity 
            style={styles.buyNowButton}
            //Buy Now function here
            onPress={() => Alert.alert('Buy Now button pressed')}
          >
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
  },

  pictureContainer: {
    flex: 2,
    backgroundColor: '#ecf0f1',
  },

  exitButton: {
    width:40,
    height: 40,
    borderRadius: 100 / 2,
    backgroundColor: "#f55",
    justifyContent: 'center',
    alignItems: "center", 
    position: 'absolute',  
    zIndex: 1,
  },

  descriptionContainer: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: '#fff',
    padding: 8,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#888',
  },

  toCartButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#ccc', 
  },

  buyNowButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#f55',
  },

  titleText: {
    fontSize: 18,
    fontWeight: "bold"
  },

  buttonText:{
    fontSize: 13,
  }
  
});
export default ProductDetails1;