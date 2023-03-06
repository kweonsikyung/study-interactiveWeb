import React, {Component} from "react";
import datatype from 'prop-types';

class R020_PropsObjval extends Component{
    render(){
        let {Object_Json} = this.props
        return(
            <div style = {{padding:"0px"}}>
                {JSON.stringify(Object_Json)}
            </div>
        )
    }
}

R020_PropsObjval.propTypes = {
    Object_Json : datatype.shape({
        react: datatype.string,
        twohudred: datatype.number //number로 오류 설정
    })
}

export default R020_PropsObjval;