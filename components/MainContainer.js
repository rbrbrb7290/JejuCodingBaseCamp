import React from 'react'; 
import {TouchableOpacity, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo'
import LectureDrawerNavigator from './LectureDrawerNavigator';
import LectureIntro from './LectureComponent/LectureIntro';
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
  //   LectureIntro:{
  //     screen: LectureIntro,
  //     navigationOptions:({navigation, screenProps}) => ({
  //         title: `${screenProps.title} 강좌`,
  //     }) 
  // },
  // //강좌 영상
  // LectureVideo: {
  //     screen: LectureVideo,
  //     navigationOptions: {
  //         title: "PaulLab"
  //     }
  // }

})

export default createAppContainer(HomeStackNavigator);
