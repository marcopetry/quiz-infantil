import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Temas from './pages/Temas';
import Inicio from './pages/Inicio';
import TelamTemas from './pages/TelaTemas';

const Routes = createAppContainer(
  createStackNavigator({
    Inicio: {
      screen: Inicio,
      navigationOptions: {
        header: null,
      },
    },
    Temas: {
      screen: Temas,
      navigationOptions: {
        title: 'Sabichão',
      },
    },
    TelaTemas: {
      screen: TelamTemas,
      navigationOptions: {
        title: 'Temas'
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#236A6E',
      },
    },
  })
);

export default Routes;