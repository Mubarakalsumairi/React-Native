import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Coocies</Text>
      <Text>Welcoom</Text>
      <Image
        source={{ uri: "https://tse3.mm.bing.net/th/id/OIP.ot8-awCJEC_SFyWVsxpv9wHaHa?cb=ucfimg2&ucfimg=1&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3" }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}