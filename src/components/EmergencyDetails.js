import React, {Component} from 'react';
import { Button, Card, Icon, Modal } from 'semantic-ui-react';

class EmergencyDetails extends Component{

    constructor(props){
        super(props);
        this.state = {open: false}
    }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state
        return (
            <div >
            <Card.Group>
                <Card>
                <Card.Content>
                
                    <Card.Header>{this.props.name}<Icon name='envelope' floated='right'/></Card.Header>
                    <Card.Description>
                    Emergency Report
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green' onClick={this.show('tiny')}>
                        Open
                    </Button>
                    </div>
                </Card.Content>
                </Card>
            </Card.Group>
            <Modal size={size} open={open} onClose={this.close}>
                <Modal.Header>New Emergency</Modal.Header>
                    <Modal.Content>
                            <p>Reported by: {this.props.name}</p>
                            <p>Account ID:</p>
                            <p>Time Reported:</p>
                            <p>Location of Incident:</p>
                            <p>Photo of Incident:</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='green'>
                                Dispatch Responders
                            </Button>
                            <Button basic color='green'>
                                Request Volunteers
                            </Button>
                </Modal.Actions>
            </Modal>
        </div>
        );
      }
  
    }

export default EmergencyDetails;
