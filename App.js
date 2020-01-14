import React, { Fragment } from 'react';
import LectureDrawerNavigator from './components/LectureDrawerNavigator';
import Admob from './components/Admob';

const App = () => {
  return (
    <Fragment>
      <LectureDrawerNavigator />
      <Admob/>
    </Fragment>
  );
}
export default App;