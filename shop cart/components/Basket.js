import React from 'react';
import {View,
       Text,
       Button,
      }
from "react-native"
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    // <aside className="block col-1">
    <View className="block col-1">
      <Text>Cart Items</Text>
      <View>
        {cartItems.length === 0 && <Text>Cart is empty</Text>}
        {cartItems.map((item) => (
          <Text key={item.id} className="row">
            <Text className="col-2">{item.name}</Text>
            <Text className="col-2">
              <Button onPress={() => onRemove(item)} className="remove"
              title="-">
              </Button>{' '}
              <Button onPress={() => onAdd(item)} className="add"
              title="+">
              </Button>
            </Text>

            <Text className="col-2 text-right">
              {item.qty} x RM{item.price.toFixed(2)}
            </Text>
          </Text>
        ))}

        {cartItems.length !== 0 && (
          <>
            
            <Text className="row">
              <Text className="col-2">Items Price</Text>
              <Text className="col-1 text-right">${itemsPrice.toFixed(2)}</Text>
            </Text>
            <Text className="row">
              <Text className="col-2">Tax Price</Text>
              <Text className="col-1 text-right">${taxPrice.toFixed(2)}</Text>
            </Text>
            <View className="row">
              <Text className="col-2">Shipping Price</Text>
              <Text className="col-1 text-right">
                RM{shippingPrice.toFixed(2)}
              </Text>
            </View>

            <View className="row">
              <Text className="col-2">
                <Text>Total Price</Text>
              </Text>
              <Text className="col-1 text-right">
                <Text>RM{totalPrice.toFixed(2)}</Text>
              </Text>
            </View>
            
            <View className="row">
              <Button onPress={() => alert('Implement Checkout!')}
              title="Checkout"
              >
                
              </Button>
            </View>
          </>
        )}
      </View>
      </View>
  
  );
}
