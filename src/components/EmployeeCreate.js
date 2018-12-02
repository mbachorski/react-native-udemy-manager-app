import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from "./common";


class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Marek"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="111-222-3333"
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

export default EmployeeCreate;
