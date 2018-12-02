import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {emailChanged, passwordChanged, loginUser} from "../actions";
import {Card, CardSection, Input, Button, Spinner} from "./common";

class LoginForm extends Component {

    onEmailChanged(text) {
        this.props.emailChanged(text)
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const {email, password} = this.props;
        console.log('email: ' + email);
        console.log('password: ' + password);
        this.props.loginUser({email, password});
    }

    renderError() {
        console.log('renderError');

        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        console.log('renderButton');

        if (this.props.loading) {
            return (
                <Spinner size={"large"}/>
            );
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        console.log("Rendering LoginForm...")

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="password"
                        placeholder="password"
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return {
        // state comes from combineReducers 'auth'
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};


export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);
