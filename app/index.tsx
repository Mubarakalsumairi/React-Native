import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import { products } from "../data/products";
export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f6f6f6"}}
      contentContainerStyle={{
        alignItems: "center",
        padding: 60,
        paddingBottom: 100, 
      }}
      >
    <Header /> 

      <View style={{flexDirection:"row",
      flexWrap: "wrap",
        justifyContent: "center",
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