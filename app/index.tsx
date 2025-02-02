import { Platform, StatusBar, Text, ImageBackground, Image, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Card from '@/components/card'
import CardTitle from '@/components/CardTitle'
import WelcomeBack from '@/components/WelcomeBack'
import { Colors } from '@/constants/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    scrollView: {
      width: "100%",
      paddingTop: '75%',
      paddingLeft: 15,
      paddingRight: 15
    }
});



export default function Index() {
  
  return (
    <ImageBackground style={{position: 'absolute', width: '100%', height:'100%'}} source={require('@/assets/images/BHallTransparent.png')}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>

          {/* Welcome Card */}
          <Card>
            <WelcomeBack />
          </Card>

          {/* Up Next Card */}
          <Card>
            <CardTitle icon="calendar.badge.clock" title="Up Next" button={true} />
          </Card>

          {/* Campus Map */}
          <Card>
            <CardTitle icon="map" title="Campus Map" button={true} />
          </Card>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
