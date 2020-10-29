/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import codePush from 'react-native-code-push'

const root = codePush({
	checkFrequency: codePush.CheckFrequency.ON_APP_START,
	installMode: codePush.InstallMode.IMMEDIATE,
})(App)
AppRegistry.registerComponent(appName, () => root);
