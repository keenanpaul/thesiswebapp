import React, {Component} from 'react'
import EmergencyDetails from './EmergencyDetails';
import {Button, Header } from 'semantic-ui-react'

class QueueIncidents extends Component {
    render(){
        return (
                <div className="ui visible inverted left vertical sidebar menu">
                    <div>
                        <Header>
                            <Button primary>
                                Add Incidents
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
                </div>
        );
    }
}

export default QueueIncidents;