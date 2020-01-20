import React, { Fragment,useState, useEffect } from 'react';
import { Image , Text , View, ImageBackground} from 'react-native';
// import Splash from './Splash';
import MainContainer from './components/MainContainer';
import Admob from './components/Admob';
import { normalize } from 'react-native-elements';
 
const Splash = () => (
  <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
    <ImageBackground 
      source={require('./images/splash.png')}
      style={{width:'100%' ,height: '100%'}}
    ></ImageBackground>
  </View> 
)

const App = () => {
  const [ viewSplash, setViewSplash ] = useState('true');
  
  useEffect(()=> {
    setTimeout(()=>{
      setViewSplash('false');
    }, 1800);
  }, []);

  return viewSplash === 'true' ? (
    <Splash />
  ) : (
    <Fragment>
      <MainContainer/> 
      <Admob/>
    </Fragment>
  );
}
export default App;