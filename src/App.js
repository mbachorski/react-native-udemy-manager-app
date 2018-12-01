import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';


class App extends Component {

    componentWillMount(): void {
        const config = {
            apiKey: "AIzaSyAZnYJlYLi4KW7_1gOzMheDh5DaOy8fx5o",
            authDomain: "manager-488d9.firebaseapp.com",
            databaseURL: "https://manager-488d9.firebaseio.com",
            projectId: "manager-488d9",
            storageBucket: "manager-488d9.appspot.com",
            messagingSenderId: "1023087720510"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
