import React, {Component} from 'react'
import MapLoad from './MapLoad';
import EmergencyDetails from './EmergencyDetails';

class QueueIncidents extends Component {
    render(){
        return (
                <div className="ui visible inverted left vertical sidebar menu">
                    <a className="item">
                        <EmergencyDetails name="Keenan"/>
                    </a>
                    <a className="item">
                        <EmergencyDetails name="Lester"/>
                    </a>
                    <a className="item">
                        <EmergencyDetails name="Mark"/>
                    </a>
                    <a className="item">
                        <EmergencyDetails name="Patrick"/>
                    </a>
                </div>
        );
    }
}

export default QueueIncidents;