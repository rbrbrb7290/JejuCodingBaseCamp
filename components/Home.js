import React, { Fragment } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet} from "react-native"

<<<<<<< HEAD

const Home = () => {
    
  return(
    <Fragment>
      <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
        <Text>Home</Text>
    </View>
    </Fragment>
  ); 
=======
const Home = ({navigation}) => {
    return(
      <Fragment>
        <View style={style.container}>
          <Text>Home</Text>
      </View>
      </Fragment>
    ); 
>>>>>>> 6d4072b8b41b271ea61b4518895f6b768a5a9066
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