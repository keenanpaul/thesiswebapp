import React, {Component} from 'react'
import { Header, Segment, Button, Image } from 'semantic-ui-react'
import fire from '../config/Fire';


class HeaderDashboard extends Component{

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);

    }

    logout() {
        fire.auth().signOut();
    }

    render(){
        return(
            <Segment clearing >
                <Header as='h2' floated='right'>
                <Button onClick={this.logout} >Logout</Button>
                </Header>
                <Image src='' size='mini' circular floated='right'/>     
            </Segment>
        );
    }
  
}

export default HeaderDashboard;


