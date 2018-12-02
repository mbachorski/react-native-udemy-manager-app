import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';
import {employeesFetch} from "../actions";
import ListItem from "./ListItem";

class EmployeeList extends Component {
    componentWillMount() {
        // subscribe to firebase data changes
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next ser of propd that this
        // component will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps)
    }

    // each time we get list of users from firebase we will recreate data source
    createDataSource({employees}) {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = dataSource.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee}/>
    }

    render() {
        console.log(this.props);

        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}>

            </ListView>
        );
    }
}

const mapStateToProps = state => {
    // state.employees is an object with many key value pairs
    // for each key value pair (map) run function  with arguments (val, uid)
    // val is user model (name, phone, shift)
    // employees is a list
    const employees = _.map(state.employees, (val, uid) => {
        // create new object, push user model and add uid to this object
        return {...val, uid}; // then collect all objects and put to array
    }); // val -> employee model. uid is the key of employee

    return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
