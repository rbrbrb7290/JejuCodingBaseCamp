import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Entypo'
import LectureIntro from '../LectureComponent/LectureIntro';
import LectureVideo from '../LectureComponent/LectureVideo';
import Home from './../LectureDrawerNavigator';
import LectureDrawerNavigator from './../LectureDrawerNavigator';

const icon = <Icon name="home" size={25} style={{paddingLeft: 11}} />

const LectureStackNavigation = createStackNavigator({
    // 강좌 개요
    LectureIntro:{
        screen: LectureIntro,
        navigationOptions:({screenProps}) => ({
            title: `${screenProps.title} 강좌`
        })
    },
    //강좌 영상
    LectureVideo: {
        screen: LectureVideo,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: LectureDrawerNavigator,
        navigationOptions: {
            headerShown: false
        }
    }


}, {
    initialRouteName: 'LectureIntro',
    defaultNavigationOptions: ({navigation}) => ({
    headerLeft:() => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            {icon}
        </TouchableOpacity>
    ), 
    })
  } 
);
export default createAppContainer(LectureStackNavigation);

