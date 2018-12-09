import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {employeeUpdate, employeeSave} from '../actions';
import {Button, Card, CardSection} from "./common";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component {

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

    render() {
        console.log(this.props.employee);

        return (
            <Card>
                <EmployeeForm/>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save changes</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm; // from combinedReducers
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit);
