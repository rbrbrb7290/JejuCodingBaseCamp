import { Image, TouchableOpacity, Button } from 'react-native';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import { createDrawerNavigator, NavigationDrawerRouterConfig } from 'react-navigation-drawer';
import MainContainer from './MainContainer';
import Home from './Home';
import WebBasicLectures from './WebBasicComponent/WebBasicLectures'; 
import ApplicationLectures from './ApplicationComponent/ApplicationLectures';
import ServerLectures from './ServerComponent/ServerLectures'; 
 
const LectureDarwerNavigator = createDrawerNavigator({
  MainContainer: {
    screen: MainContainer,
    navigationOptions: { 
      drawerLabel: " "
    } 
  }, 
  Home: {
    screen: Home, 
    navigationOptions: {
     drawerLabel: "홈"
    }
  },
  WebBasicLectures: {
    screen: WebBasicLectures,
    navigationOptions: {
      drawerLabel: "웹 기초",
    }
  },
  ApplicationLectures: {
    screen: ApplicationLectures,
    navigationOptions: {
      drawerLabel: "애플리케이션", 
    }
    
    },
    ServerLectures: {
        screen: ServerLectures,
        navigationOptions: {
          drawerLabel: "서버"
        } 
    }

}, )
export default createAppContainer(LectureDarwerNavigator);