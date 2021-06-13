import React from 'react';
import {View,
  Text,
  Button,Image}
from "react-native";
export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <View>
    <View style={{
      flex: 1,
      flexDirection: 'row',
    }} >
      <Image source={product.src}
            style={{width: 100, height: 100}}/>
      <Text>{product.name}</Text>
      <Text>RM{product.price}</Text>   
      </View>
      <View>
      <Text style={{marginLeft:100, marginTop:-50}}>
        <Button  onPress={() => onAdd(product)}
        title={'Add To Cart'}/>
       </Text>
       </View>
       </View>
  );
}
