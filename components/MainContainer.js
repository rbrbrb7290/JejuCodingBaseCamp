import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo';
import LectureDrawerNavigator from './LectureDrawerNavigator';
import License from './License';
import {normalize} from 'react-native-elements';
import LectureVideo from './LectureComponent/LectureVideo';

const icon = <Icon name="menu" size={40} />;
const infoIcon = <Icon name="info" size={20} />;
const HomeStackNavigator = createStackNavigator({
  LectureDrawerNavigator: {
    screen: LectureDrawerNavigator,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerTitle: () => (
        <View>
          <Image
            source={require('./../images/logo.png')}
            style={style.headerTitle}
          />
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={style.headerLeft}>
          {icon}
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={style.headerRight}
          onPress={() => navigation.navigate('License')}>
          {infoIcon}
        </TouchableOpacity>
      ),
    }),
  },
  License: {
    screen: License,
    navigationOptions: {
      headerTitle: () => (
        <View>
          <Text
            style={{
              fontSize: normalize(17),
              marginLeft: -15,
              fontWeight: 'bold',
            }}>
            오픈소스 라이센스 {'><'}{' '}
          </Text>
        </View>
      ),
    },
  },
  // LectureList:{
  //   screen: LectureList
  // },
  LectureVideo: {
    screen: LectureVideo,
    navigationOptions: {
      title: '',
    },
  },
});

const style = StyleSheet.create({
  headerTitle: {
    width: 40,
    height: 40,
    ...Platform.select({
      ios: {
        marginLeft: -150,
      },
      android: {
        marginLeft: -20,
      },
    }),
  },
  headerLeft: {
    marginLeft: 5,
  },
  headerRight: {
    marginRight: -15,
    height: 48,
    width: 48,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
export default createAppContainer(HomeStackNavigator);
