import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList165823Navigator from '../features/NotificationList165823/navigator';
import Settings165822Navigator from '../features/Settings165822/navigator';
import Settings165814Navigator from '../features/Settings165814/navigator';
import UserProfile165812Navigator from '../features/UserProfile165812/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList165823: { screen: NotificationList165823Navigator },
Settings165822: { screen: Settings165822Navigator },
Settings165814: { screen: Settings165814Navigator },
UserProfile165812: { screen: UserProfile165812Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
