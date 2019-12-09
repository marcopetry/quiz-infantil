import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Temas from './pages/Temas';
import Inicio from './pages/Inicio';
import TelamTemas from './pages/TelaTemas';
import Perguntas from './pages/Perguntas';
import ControllersPerguntas from './controllers/ControllersPerguntas';

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
    Perguntas: {
      screen: ControllersPerguntas,
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