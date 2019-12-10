import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Inicio from './pages/Inicio';
import TelaTemas from './pages/TelaTemas';
import ControllersPerguntas from './controllers/ControllersPerguntas';

const Routes = createAppContainer(
  createStackNavigator({
    Inicio: {
      //screen: Scores,
      screen: Inicio,
      navigationOptions: {
        //title: 'Scores'
        header: null,
      },
    },
    Temas: {
      screen: TelaTemas,
      navigationOptions: {
        title: 'Sabichão'
      }
    },
    Perguntas: {
      screen: ControllersPerguntas,
      navigationOptions: {
        title: 'Perguntas'
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