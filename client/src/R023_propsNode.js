import React, {Component} from "react";

//상위 컴포넌트에서 전달한 노드는 this.props.chilren 이라는 문법으로 접근해 사용한다
class R023_propsNode extends Component{
    render(){
        return (
            <div style = {{padding:"0px"}} >
                {this.props.children}
            </div>
        )
    }
}
export default R023_propsNode;