import React, {Component} from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

class EmergencyDetails extends Component{
    render() {
        return (
            <div >
            <Card.Group>
                <Card>
                <Card.Content>
                    <Card.Header>{this.props.name}</Card.Header>
                    <Card.Description>
                    Emergency Report
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>
                        Open
                    </Button>
                    </div>
                </Card.Content>
                </Card>
            </Card.Group>
        </div>
        );
      }
  
    }

export default EmergencyDetails;
