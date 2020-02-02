import React from 'react'; 
import { TouchableHighlight, Image, View, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo';
import LectureDrawerNavigator from './LectureDrawerNavigator';
import License from './License'
import { normalize } from 'react-native-elements';
import LectureList from './LectureComponent/LectureList';
import LectureVideo from './LectureComponent/LectureVideo';

const icon = <Icon name="menu" size={40}/>
const infoIcon = <Icon name="info" size={20}/>
const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: LectureDrawerNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'PaulLab',
            headerTitle: ()=> (
              <View>
                <Image source={require('./../images/logo.png')}
                       style={{width:40 , height:40, marginLeft: -20}} /> 
               </View>
            ),
            headerLeft: () => (   
              <TouchableHighlight 
                  onPress={() => navigation.toggleDrawer()} underlayColor="white"
                  style={{marginLeft:5}}>
                    {icon}
              </TouchableHighlight> 
            ),
            headerRight:()=>(
              <TouchableHighlight 
                  style={{marginRight:-15,height:48, width:48, alignContent:'center',justifyContent:'center'}} 
                  onPress={()=> navigation.navigate('License')} underlayColor="white">
                    {infoIcon}
              </TouchableHighlight >
            )
        })
    },
    License:{
      screen: License,
      navigationOptions:{
        headerTitle:()=>(
          <View>
            <Text style={{fontSize:normalize(17), marginLeft:-15,fontWeight:'bold'}}>오픈소스 라이센스 {'><'} </Text>
          </View>
        )
      }
    },
    LectureVideo: {
      screen:LectureVideo,
      navigationOptions: {
        title: ""
      }
    }
})

export default createAppContainer(HomeStackNavigator);
