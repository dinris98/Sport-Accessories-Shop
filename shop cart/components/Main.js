import React from 'react';
import Product from './Product';
import {View,
  Text,
  Button,
  List}
from "react-native"

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <View className="block col-2">
      <Text>Products</Text>
      <View className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </View>
    </View>
  );
}
