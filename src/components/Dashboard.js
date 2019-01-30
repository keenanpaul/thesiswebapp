import React, {Component} from 'react'
import MapLoad from './MapLoad';
import QueueIncidents from './QueueIncidents';
import { Button } from 'semantic-ui-react'
import fire from '../config/Fire';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);

    }

    logout() {
        fire.auth().signOut();
    }

    render(){
        return (
            <div className="ui bottom attached segment pushable" style={{minHeight: '100vh', display: 'flex', flexFlow: 'column nowrap'}}>
               
                <QueueIncidents/>
                <div className="pusher">
                     <Button onClick={this.logout}>Logout</Button>
                    <div className="ui basic segment">
                    <MapLoad/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;