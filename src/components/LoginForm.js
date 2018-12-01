import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from "../actions";
import {Card, CardSection, Input, Button} from "./common";
import {combineReducers} from "redux";

class LoginForm extends Component {

    onEmailChanged(text) {
        this.props.emailChanged(text)
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text)
    }

    render() {
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
                    />
                </CardSection>

                <CardSection>
                    <Button>
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


export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);
