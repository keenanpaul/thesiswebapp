import React, {Component} from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';

class EmergencyDetails extends Component{

    // constructor(props){
    //     super(props);
    // }

    openDetails(){
        console.log('Button clicked');
    }

    render() {
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
                    <Button basic color='green' onClick={this.openDetails}>
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
