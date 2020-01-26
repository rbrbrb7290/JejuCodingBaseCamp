import React, { Fragment,useState, useEffect } from 'react';
import Splash from './components/Splash';
import MainContainer from './components/MainContainer';
import Admob from './components/Admob';

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
    <Fragment>
      <MainContainer/> 
      {/* <Admob/> */}
    </Fragment>
  );
}
export default App;