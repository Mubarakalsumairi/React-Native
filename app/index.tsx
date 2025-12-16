import { Image, Text, View } from "react-native";

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
      <View>
        <Text>Chocolate red</Text>
        <Image 
        source={{ uri: "https://tse3.mm.bing.net/th/id/OIP.ooZ4roMGxE241_h73fAifQHaDt?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"}}
        style={{ width: 200, height: 200}}
        />
        <Text>3.500KD</Text>
      </View>
      <View>
        <Text>chocolate cake</Text>
        <Image
        source={{ uri: "https://butternutbakeryblog.com/wp-content/uploads/2023/04/chocolate-cake.jpg"}} 
        style={{ width: 200, height: 200}}
        />
        <Text>4.500KD</Text>
      </View>
      </View>
    </View>
  );
}