import React, { Fragment } from 'react';
import LectureDrawerNavigator from './components/LectureDrawerNavigator';
import MainContainer from './components/MainContainer';
import Admob from './components/Admob';

const App = () => {
  return (
    <Fragment>
      {/* <LectureDrawerNavigator /> */}
      <MainContainer/>
      <Admob/>
    </Fragment>
  );
}
export default App;