import { createAppContainer, NavigationEvents } from 'react-navigation';
import { createDrawerNavigator, NavigationDrawerRouterConfig } from 'react-navigation-drawer';
import Home from './MainContainer';
import LectureStackNavigator from './StackNavigators/LectureStackNavigation';

 
const LectureDarwerNavigator = createDrawerNavigator({
  Home: {
    screen: Home, 
    navigationOptions: {
     drawerLabel: "홈"
    }
  },
  HTML: { 
    screen: LectureStackNavigator,
    navigationOptions: { 
      drawerLabel: "HTML",
    }
  },
  CSS: {
    screen: LectureStackNavigator,
    drawerLabel: "CSS",
  }, 

  JavaScript: {
    screen: LectureStackNavigator,
    navigationOptions: {
      drawerLabel: "JavaScript",
    }
  },
  Python: {
    screen: LectureStackNavigator,
    navigationOptions: {
      drawerLabel: "Python",
    }
  },

  Django: {
    screen: LectureStackNavigator,
        drawerLabel: "Django",
    },
    DataAnalysis: {
        screen: LectureStackNavigator,
        navigationOptions: {
          drawerLabel: "Data Analysis"
        } 
    },
    Etc: {
      screen: LectureStackNavigator,
      navigationOptions: {
        drawerLabel: "협업툴 Etc."
      } 
  }

}, )
export default createAppContainer(LectureDarwerNavigator);