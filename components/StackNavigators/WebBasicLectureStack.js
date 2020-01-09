import React from 'react'; 
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import WebBasicLectureView from '../WebBasicComponent/WebBasicLectures';
import Icon from 'react-native-vector-icons/Entypo'

const icon = <Icon name="menu" size={32} />

const WebBasicStack = createStackNavigator({
    HTML: {
        screen: WebBasicLectureView,
        navigationOptions: ({navigation}) => ({
            title: "HTML"
        })
    },
    CSS: {
        screen: WebBasicLectureView,
        navigationOptions: ({navigation}) => ({
            title: "CSS"
        })
    },
    JavaScript: {
        screen: WebBasicLectureView,
        navigationOptions: ({navigation}) => ({
            title: "JavaScript"
        })
    }
},
{
    defaultNavigationOptions: ({navigation})=>({
            headerLeft:() => (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    {icon}
                </TouchableOpacity>
            ), 
    })
})

export default WebBasicStack;