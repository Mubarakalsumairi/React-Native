import { Image, Text, View } from "react-native";
import ProductItem from "../components/ProductItem";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FF0000",
        padding: 60, 
      }}
    >
      <Text>Coocies</Text>
      <Text>Welcoom</Text>
      <Image
        source={{ uri: "https://tse3.mm.bing.net/th/id/OIP.ot8-awCJEC_SFyWVsxpv9wHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3" }}
        style={{ width: 200, height: 200 }}
      />

      <View style={{flexDirection:"row"}} >
        <ProductItem
        key="Chocolate red"
          name="Chocolate red"
          price={3.500}
          image="https://tse3.mm.bing.net/th/id/OIP.ooZ4roMGxE241_h73fAifQHaDt?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
        />
        <ProductItem 
        key="chocolate cake"
          name="chocolate cake"
          price={4.500}
          image="https://butternutbakeryblog.com/wp-content/uploads/2023/04/chocolate-cake.jpg"
        />
      </View>
    </View>
  );
}