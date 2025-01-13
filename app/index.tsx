import { Text, View, ImageBackground } from "react-native";
import Card from '@/components/card'

export default function Index() {
  return (
    <ImageBackground style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}} source={require('@/assets/images/BradleyHall.jpg')}>
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        width: "95%"
      }}
    >
      <Card title="Welcome"></Card>
      <Card title="Up Next"></Card>
      <Card title="Campus Map"></Card>
    </View>
    </ImageBackground>
    
  );
}
