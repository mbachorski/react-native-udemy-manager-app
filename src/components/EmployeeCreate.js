import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions'
import {Button, Card, CardSection, Input} from "./common";

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Marek"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="111-222-3333"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}
                    />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>Create</Button>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm; // from combinedReducers
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);
