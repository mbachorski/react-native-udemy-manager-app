import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {Button, Card, CardSection} from "./common";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {

    onButtonPress() {
        const {name, phone, shift} = this.props;
        // '' || 'Monday' -> 'Monday'
        // INITIAL_STATE in reducer is '' for shift
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {

        console.log(this.props.employee);

        return (
            <Card>

                <EmployeeForm  {...this.props}/>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm; // from combinedReducers
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);
