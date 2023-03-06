import React from "react";
export default function withHocComponent(InComponent, InComponentName){
    return class OutComponent extends React.Component{
        conponentDidMount() {
            console.log(`3. IncomponentName : ${InComponentName}`)
        }

        render() {
            console.log('1. InComponent render')
            return (<InComponent {...this.props}/>)
        }
    }
}