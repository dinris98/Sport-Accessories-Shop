import React from 'react';
// import {View,
//   Text,
//   Button,
//   Linking,
//   TouchableOpacity,
//   List}
// from "react-native"
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default function Header(props) {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Shopping Cart</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>
          <Button transparent>
            <Icon name='heart' />
          </Button>
          <Button transparent>
            <Icon name='more' />
          </Button>
        </Right>
      </Header>
    </Container>
  );
}
