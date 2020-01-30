import React, { Fragment,useState, useEffect } from 'react';
import Splash from './components/Splash';
import MainContainer from './components/MainContainer';

const App = () => {
  const [ viewSplash, setViewSplash ] = useState('true');
  
  useEffect(()=> {
    setTimeout(()=>{
      setViewSplash('false'); 
    }, 1500);
  }, []);

  return viewSplash === 'true' ? (
    <Splash />
  ) : (
      <MainContainer />
    );
}
export default App;