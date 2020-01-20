import React from 'react'; 
import {TouchableOpacity, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo'
import LectureDrawerNavigator from './LectureDrawerNavigator';
import LectureList from './LectureComponent/LectureList';
import LectureVideo from './LectureComponent/LectureVideo';   

const icon = <Icon name="menu" size={32}/>

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: LectureDrawerNavigator,
        navigationOptions: ({navigation}) => ({
            title: "PaulLab",   
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                {icon}
              </TouchableOpacity> 
            ), 
          })    
    },
})

export default createAppContainer(HomeStackNavigator);
