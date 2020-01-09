import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo'
import LectureIntro from '../LectureComponent/LectureIntro';
import LectureVideo from '../LectureComponent/LectureVideo';

const icon = <Icon name="menu" size={32} />

const LectureStackNavigation = createStackNavigator({
    // 강좌 개요
    LectureIntro: {
        screen: LectureIntro,
        navigationOptions: {
            title: "강좌 소개"
        }
    },
    //강좌 영상
    LectureVideo: {
        screen: LectureVideo,
        navigationOptions: {
            headerShown: false
        }
    }

}, {
    defaultNavigationOptions: ({navigation}) => ({
        headerLeft:() => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                {icon}
            </TouchableOpacity>
        ), 
    })
})



export default LectureStackNavigation;

