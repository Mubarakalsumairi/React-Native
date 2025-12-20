import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type ProductItemProps = {
    name : string;
    price : number;
    image: string;
}
const ProductItem = ({ name, price, image}: ProductItemProps) => {
  return (
    <View>
      <Text>{name}</Text>
      <Image 
       source={{ uri: image }}
       style={{ width: 200, height: 200 }}
     />
     <Text>{price.toFixed(3)}KD</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({})