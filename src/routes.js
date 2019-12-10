import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Temas from './pages/Temas';
import Inicio from './pages/Inicio';
import TelaTemas from './pages/TelaTemas';
import Perguntas from './pages/Perguntas';
import ControllersPerguntas from './controllers/ControllersPerguntas';
import Scores from './pages/Scores';

const Routes = createAppContainer(
  createStackNavigator({
    Inicio: {
      screen: Scores,
      //screen: Inicio,
      navigationOptions: {
        title: 'Scores'
        //header: null,
      },
    },
    Temas: {
      screen: Temas,
      navigationOptions: {
        title: 'Sabichão',
      },
    },
    TelaTemas: {
      screen: TelaTemas,
      navigationOptions: {
        title: 'Temas'
      }
    },
    Perguntas: {
      screen: ControllersPerguntas,
      navigationOptions: {
        title: 'Perguntas'
      }
    },
    Scores: {
      screen: Scores,
      navigationOptions: {
        title: 'Scores'
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