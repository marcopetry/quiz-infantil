import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Temas from './pages/Temas';
import Inicio from './pages/Inicio';
import TelamTemas from './pages/TelaTemas';
import Perguntas from './pages/Perguntas';

const Routes = createAppContainer(
  createStackNavigator({
    Inicio: {
      screen: Perguntas,
      navigationOptions: {
        //header: null,
        title: 'Perguntas'
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
    Perguntas: {
      screen: Perguntas,
      navigationOptions: {
        title: 'Perguntas'
      }
    }
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