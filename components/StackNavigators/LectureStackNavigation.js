import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer, NavigationActions, StackActions} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo'
import LectureIntro from '../LectureComponent/LectureIntro';
import LectureVideo from '../LectureComponent/LectureVideo';

const LectureStackNavigation = createStackNavigator({
    // 강좌 개요
    LectureIntro:{
        screen: LectureIntro,
        navigationOptions:({navigation, screenProps}) => ({
            title: `${screenProps.title} 강좌`,
        }) 
    },
    //강좌 영상
    LectureVideo: {
        screen: LectureVideo,
        navigationOptions: {
            title: "PaulLab"
        }
    }

}, {
    initialRouteName: 'LectureIntro',
    headerMode: "none"
    // defaultNavigationOptions: ({navigation}) => ({
   
    // })
  } 
);
export default createAppContainer(LectureStackNavigation);

