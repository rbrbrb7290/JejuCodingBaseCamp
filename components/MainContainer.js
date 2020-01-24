import React from 'react'; 
import {TouchableOpacity, Image,View,Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo';
import LectureDrawerNavigator from './LectureDrawerNavigator';
import License from './License'
import { normalize } from 'react-native-elements';

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
              <TouchableOpacity 
                  onPress={() => navigation.toggleDrawer()}
                  style={{marginLeft:5}}
                  >
                {icon}
              </TouchableOpacity> 
            ),
            headerRight:()=>(
              <TouchableOpacity style={{marginRight:-15,height:48, width:48, alignContent:'center',justifyContent:'center'}} onPress={()=> navigation.navigate('License')}>
              <Icon name="info" size={20} style={{}}/>
              </TouchableOpacity>
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
    }
})

export default createAppContainer(HomeStackNavigator);
