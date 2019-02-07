import React, {Component} from 'react'
import EmergencyDetails from './EmergencyDetails';
import { Button, Modal, Header, Form } from 'semantic-ui-react';

class QueueIncidents extends Component {

    constructor(props){
        super(props);
        this.state = {open: false}
    }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render(){
        const { open, size } = this.state

        return (
                <div className="ui visible left vertical sidebar menu">
                    <div>
                        <Header>
                            <Button primary onClick={this.show('tiny')}>
                                Add Incident
                            </Button>
                            <Button primary>
                                Something
                            </Button>
                        </Header>
                    </div>
                    
                        <div className='item'>
                            <EmergencyDetails name="Keenan"/>
                        </div>
                        <div className='item'>
                            <EmergencyDetails name="Lester"/>
                        </div>
                        <div className='item'>
                            <EmergencyDetails name="Mark"/>
                        </div>
                        <div className='item'>
                            <EmergencyDetails name="Patrick"/>
                        </div>
                   
                    <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>New Emergency</Modal.Header>
                        <Modal.Content>
                            <Form>
                                <Form.Field>
                                    <label>Type of Incident</label>
                                    <input name='incidentType'/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Incident Location</label>
                                    <input name='incidentLocation'/>
                                </Form.Field>
                            </Form>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button basic color='green'>
                                    Submit
                                </Button>
                            </Modal.Actions>
                    </Modal>
                </div>
        );
    }
}

export default QueueIncidents;