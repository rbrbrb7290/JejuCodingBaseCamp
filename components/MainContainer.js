import { createStackNavigator } from 'react-navigation-stack';
import {TouchableOpacity, Image} from 'react-native';
import Home from './Home'; 
import React from 'react'; 
import Icon from 'react-native-vector-icons/Entypo'

const icon = <Icon name="menu" size={32} />

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            title: "홈",  
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                {icon}
              </TouchableOpacity> 
            ), 
          })    
    },

    // ApplicationLectures: {
    //      screen: ApplicationLectures,
    //      navigationOptions: ({navigation}) => ({
    //         title: "애플리케이션",
    //         headerLeft: () => (<TouchableOpacity onPress={() => navigation.openDrawer()}>
    //                       {icon} 
    //                     </TouchableOpacity>
    //         ), 
            
    //       })
    // },
    // ServerLectures: {
    //     screen: ServerLectures,
    //     navigationOptions: ({navigation}) => ({
    //         title: "서버",
    //         headerLeft: () => (<TouchableOpacity onPress={() => navigation.openDrawer()}>
    //                       {icon}   
    //                     </TouchableOpacity>
    //         ),    
    //       })  
    // },

    
})

export default HomeStackNavigator;
