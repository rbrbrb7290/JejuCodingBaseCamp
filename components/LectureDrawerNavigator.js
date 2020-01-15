import { createAppContainer,  } from 'react-navigation';
import { createDrawerNavigator,} from 'react-navigation-drawer';
import Home from './MainContainer';
import LectureStackNavigation from './StackNavigators/LectureStackNavigation';
import LectureIntro from './LectureComponent/LectureIntro'
import * as env from '../env';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo'
import BookList from './BookComponent/BookList';


const LectureDarwerNavigator = createDrawerNavigator({
  Home: {
    screen: Home, 
    navigationOptions: {
     drawerLabel: "홈"
    }
  },
  HTML: { 
    screen: (props) => <LectureStackNavigation screenProps={{ plId:env.PL_HTML , title: 'HTML'}} /> ,
  }, 
  CSS: {
    screen: (props) => <LectureStackNavigation screenProps={{ plId:env.PL_CSS ,title: 'CSS' }} /> ,
  }, 
  JavaScript: {
    screen: (props) => <LectureStackNavigation screenProps={{plId:env.PL_HTML , title: 'JS'}} /> ,
  },
  Python: {
    screen: (props) => <LectureStackNavigation screenProps={{plId:env.PL_HTML ,title: 'Python'}} /> ,
  },
  Django: {
    screen: (props) =>  <LectureStackNavigation screenProps={{plId:env.PL_DJANGO , title: 'Django'}} /> ,
  },
  DataAnalysis: {
    screen: (props) =>  <LectureStackNavigation screenProps={{plId:env.PL_DATA_ANALYSIS, title:'데이터 분석'}} /> ,
  },
  Etc: {
    screen: (props) =>  <LectureStackNavigation screenProps={{plId:env.PL_ETC , title:'기타'}} /> ,
    navigationOptions: {
      drawerLabel: "협업툴 Etc.",
    },
  },
  
  Book:{
    screen: BookList,
    navigationOptions:{
      drawerLabel:"책 목록"
    }
  },
}, )
export default createAppContainer(LectureDarwerNavigator);