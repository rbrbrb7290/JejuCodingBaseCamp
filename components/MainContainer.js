import React from 'react'; 
import {TouchableOpacity, Image,View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo';
import LectureDrawerNavigator from './LectureDrawerNavigator';

const icon = <Icon name="menu" size={32}/>

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: LectureDrawerNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'PaulLab',
            headerTitle: ()=> (
              <View>
                <Image source={require('./../images/logo.png')}
                       style={{width:40 , height:40, marginLeft: -32}} /> 
              </View>
            ),
            headerLeft: () => ( 
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                {icon}
              </TouchableOpacity> 
            ),
          
          })    
    },
  
})

export default createAppContainer(HomeStackNavigator);
