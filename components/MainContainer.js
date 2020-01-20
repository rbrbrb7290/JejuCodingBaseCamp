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
<<<<<<< HEAD
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

=======
  
>>>>>>> b488cf14f0a0ed6fc4ad128b6ca9e3800d153272
})

export default createAppContainer(HomeStackNavigator);
