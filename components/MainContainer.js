import React from 'react'; 
import {TouchableOpacity, Image,View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Entypo';
import LectureDrawerNavigator from './LectureDrawerNavigator';
import License from './License'

const icon = <Icon name="menu" size={32}/>
const infoIcon = <Icon name="info" size={20}/>
const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: LectureDrawerNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'PaulLab',
            headerTitle: ()=> (
              <View>
                <Image source={require('./../images/logo.png')}
<<<<<<< HEAD
                       style={{width:40 , height:40, marginLeft: -32}} />
=======
                       style={{width:40 , height:40, marginLeft: -20}} /> 
>>>>>>> fc64f034e08c7549901c2809311907feb467860a
              </View>
            ),
            headerLeft: () => (   
              <TouchableOpacity 
                  onPress={() => navigation.toggleDrawer()}
                  style={{marginLeft:10}}
                  >
                {icon}
              </TouchableOpacity> 
            ),
            headerRight:()=>(
              <TouchableOpacity style={{marginRight:10}} onPress={()=> navigation.navigate('License')}>
              <Icon name="info" size={20} style={{marginLeft:100}}/>
              </TouchableOpacity>
            )
          })
    },
    License:{
      screen: License
    }
})

export default createAppContainer(HomeStackNavigator);
