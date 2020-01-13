import React, { Fragment } from 'react';
import { View, Text, Button, TouchableOpacity} from "react-native"
import Admob from './Admob';

const Home = () => {
    return(
      <Fragment>

        <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
          <Text>Home</Text>
      </View>
      <Admob/>
      </Fragment>
    ); 
} 

export default Home;