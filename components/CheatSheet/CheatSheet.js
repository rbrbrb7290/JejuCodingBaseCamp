import {createStackNavigator} from 'react-navigation-stack';
import SheetMain from './SheetMain';
import Sheet from './Sheet';
const MainStack = createStackNavigator(
  {
    SheetMain: {
      screen: SheetMain,
    },
    Sheet: {
      screen: Sheet,
    },
  },
  {
    headerMode: 'none',
  },
);

export default MainStack;
