import React, { Component } from "react";

class R073_ReactRef extends Component{
   //ref는 reference의 약자로 '참조'라는 뜻
   //react에서 element의 값을 얻거나 수정할 떄 보통 javascript나 jquery를 사용한다
   //이때 id나 class 같은 속성으로 element에 접근한다
   //Ref를 사용하면 element가 참조하는 변수에 접근해 변경하고 element를 제어할 수 있다.


   //createRef 함수로 Ref 변수 inputRef를 생성한다
   constructor(props) {
    super(props);
    this.InputRef = React.createRef();
   }

   RefFocus = (e) => {
    this.InputRef.current.focus();
   }

   JavascriptFocus() {
    document.getElementById('id').focus();
   }


    render(){
        return(
            <>
            {/* element에 ref속성을 추가하고 Ref변수에 inputRef를 할당해 참조하도록 한다
            이때 참조에 대한 정보가 ref의 current 라는 속성에 할당된다 */}
            <input id='id' type="text" ref={this.InputRef} />


            {/* 아래 button을 클릭하면 refFocus 함수가 실행된다.
            line30의 input태그가 참조하고 있는 inputRef.current에 접근해 focus 이벤트를 발생시킨다  */}
            <input type="button" value="Ref focus" onClick={this.RefFocus} />

            {/* 아래 button을 클릭하면 javascriptFocus 함수가 실행된다
            javascript를 사용해 id값으로 line30 <input>태그에 접근해 focus 이벤트를 발생시킨다 */}
            <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus} />
            </>
        )
    }
}

export default R073_ReactRef;