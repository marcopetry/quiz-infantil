import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Temas from './pages/Temas';
import Inicio from './pages/Inicio';

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
        title: 'Quiz',
      },
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