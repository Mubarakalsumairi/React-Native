import { Image, ScrollView, Text, View } from "react-native";
import ProductItem from "../components/ProductItem";
import { products } from "../data/products";
export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f3f3f2"}}
      contentContainerStyle={{
        alignItems: "center",
        padding: 60,
        paddingBottom: 100, 
      }}
    >
      <Text>Dar Cake</Text>
      <Text>Welcoom</Text>
      <Image
        source={{ uri: "https://tse3.mm.bing.net/th/id/OIP.ot8-awCJEC_SFyWVsxpv9wHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3" }}
        style={{ width: 200, height: 200 }}
      />

      <View style={{flexDirection:"column",
         alignItems: "center",
         gap: 15,
        }} >
      {products.map((product) => (
  <ProductItem
    key={product.name}
    name={product.name}
    price={product.price}
    image={product.image}
  />
))}
      </View>
    </ScrollView>
  );
}