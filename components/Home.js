import React, { Fragment } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet} from "react-native"

const Home = ({navigation}) => {
    return(
      <Fragment>
        <View style={style.container}>
          <Text>Home</Text>
      </View>
      </Fragment>
    ); 
} 
// Home.navigationOptions= ({navigation}) => ({
//   title: "홈",  
//   headerLeft: () => (
//     <TouchableOpacity onPress={() => navigation.openDrawer()}>
//       {icon}
//     </TouchableOpacity> 
//   ), 
// })    

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
    justifyContent: 'center' , 
    alignItems: 'center'
  }
})

export default Home;