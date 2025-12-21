import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ProductItemProps  {
    name : string;
    price : number;
    image: string;
}
const ProductItem = ({ name, price, image}: ProductItemProps) => {
  return (
    <View>
      <Text style={{ fontSize:18, fontWeight: `bold`}}>{name}</Text>
      <Image 
       source={{ uri: image }}
       style={{ width: 150, height: 150,
        borderWidth: 2,
        borderColor: `#D4A574`,
        borderRadius: 12, 
        }}
     />
     <Text style={{ fontSize: 18, fontWeight: `bold`, color:'#595946'}}>{price.toFixed(3)}KD</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({})