import {createStackNavigator} from 'react-navigation-stack';
import LectureList from '../LectureComponent/LectureList';
import LectureVideo from '../LectureComponent/LectureVideo';

const LectureStackNavigation = createStackNavigator(
  {
    // 강좌 개요
    LectureList: {
      screen: LectureList,
    },

    //강좌 영상
    LectureVideo: {
      screen: LectureVideo,
    },
  },
  {
    headerMode: 'none',
  },
);
export default LectureStackNavigation;
