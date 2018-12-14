import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import {Button, Card, CardSection, ConfirmationModal} from "./common";
import EmployeeForm from "./EmployeeForm";
import Communications from "react-native-communications";

class EmployeeEdit extends Component {

    state = {showConfirmationModal: false};

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            // updates reducer with every property of employee
            // stuff them as pre filled attriutes in reducer
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {name, phone, shift} = this.props;
        console.log(name, phone, shift);

        // listItem passed this.props.employee in action.employeeEdit
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    onTextPress() {
        const {phone, shift} = this.props;
        console.log(phone, shift);

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onFirePress() {
        this.setState({showConfirmationModal: !this.state.showConfirmationModal});
    }

    onAccept() {
        const {uid} = this.props.employee;

        this.props.employeeDelete({uid});
        // this.setState({showConfirmationModal: false});
    }

    onDecline() {
        this.setState({showConfirmationModal: false});
    }

    render() {
        console.log(this.props.employee);

        return (
            <Card>
                <EmployeeForm/>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>
                        Fire employee!
                    </Button>
                </CardSection>

                <ConfirmationModal
                    visible={this.state.showConfirmationModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </ConfirmationModal>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm; // from combinedReducers
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);
