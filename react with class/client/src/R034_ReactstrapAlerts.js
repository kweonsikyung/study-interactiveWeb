import React, {Component} from "react";
import {Alert, UncontrolledAlert} from 'reactstrap';

class R034_ReactstrapAlerts extends Component{
    render(){
        return(
            <div>
                <Alert color='light'>
                    Simple Alert [color : light]
                </Alert>
                <Alert color='primary'>
                    Simple Alert [color : primary]
                </Alert>
                <Alert color='secondary'>
                    Simple Alert [color : secondary]
                </Alert>
                <Alert color='success'>
                    Simple Alert [color : success]
                </Alert>
                <Alert color='danger'>
                    Simple Alert [color : danger]
                </Alert>
                <UncontrolledAlert color="warning">
                    UncontrolledAlert [color : warning]
                </UncontrolledAlert>
                <UncontrolledAlert color="info">
                    UncontrolledAlert [color : info]
                </UncontrolledAlert>
                <UncontrolledAlert color="dark">
                    UncontrolledAlert [color : dark]
                </UncontrolledAlert>
              
            </div>
        )
    }
}

export default R034_ReactstrapAlerts;