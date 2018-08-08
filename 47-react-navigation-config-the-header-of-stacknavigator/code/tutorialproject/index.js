import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Components
import MainComponent from './components/MainComponent';
import DetailComponent from './components/DetailComponent';
import ThirdComponent from './components/ThirdComponent';
//Screen names
import { MainScreen, DetailScreen, ThirdScreen } from './screenNames';

const App = StackNavigator({    
    MainScreen: {
        screen: MainComponent,
        // navigationOptions: {
        //     headerTitle: 'Main',
        // },
    },
    DetailScreen: {
        screen: DetailComponent,
        // navigationOptions: {
        //     headerTitle: 'Detail',
        // },
    },
    ThirdScreen: {
        screen: ThirdComponent,
        // navigationOptions: {
        //     headerTitle: 'Third',
        // },
    },
});
AppRegistry.registerComponent('tutorialproject', () => App);
