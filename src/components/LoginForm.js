import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from "../actions";
import {Card, CardSection, Input, Button} from "./common";

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

    render() {
        console.log("test")
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

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        // state comes from combineReducers 'auth'
        email: state.auth.email,
        password: state.auth.password
    };
};


export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);
