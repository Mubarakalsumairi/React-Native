import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
    const [visitors, setVisitors] = useState(0);

 return (
  <View style={styles.container}>
    <Text style={{ fontSize: 45, fontWeight: `bold`}}>Cake Factory</Text>
    <Text style={{ fontSize: 40, fontWeight: `bold`}}>Welcome</Text>
    <Image
    source={{ uri: "https://www.cakefactory.co.il/images/logos/%D7%A2%D7%95%D7%92%D7%95%D7%AA-%D7%9E%D7%A2%D7%95%D7%A6%D7%91%D7%95%D7%AA-%D7%9C%D7%94%D7%96%D7%9E%D7%A0%D7%94-Cake-Factory.jpg" }}
    style={{ width: 300, height: 150 }}
    />
    
    <TouchableOpacity
    style={styles.button}
    onPress={() => setVisitors(visitors + 1)}
    >
     <Text style={styles.buttonText}> 👋 visitors: {visitors}</Text>
     </TouchableOpacity>
    

  </View>
);
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#D4A574',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});