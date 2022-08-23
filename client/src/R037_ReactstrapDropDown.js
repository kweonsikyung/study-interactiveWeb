import React, {Component} from "react";
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

// Downtown 패키지는 대표메뉴를 클릭하면, 하위 메뉴 리스트가 표시되는 기능이다
//대표 메뉴를 누를때마다 하위메뉴 리스트를 번갈아가며 표시, 미표시를 해야한다
//이를 위해서는 현재 하위 메뉴 리스트 상태가 표시인지 미표시인지에 대한 정보가 필요하다

class R037_ReactstrapDropDown extends Component{
    constructor(props){
        super(props);
        this.state = {
            dropdown: false
        }
    }

    toggle = (e) =>{
        this.setState({dropdownOpen : !this.state.dropdownOpen});
    }

    render(){
        return(
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret> 버튼 Dropdown </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    <a href="http://naver.com">
                       <DropdownItem >웹 사이트로 이동</DropdownItem> 
                    </a>
                    <DropdownItem onClick={e => alert("Alert 버튼")}>Alert 버튼</DropdownItem>

                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}
export default R037_ReactstrapDropDown;