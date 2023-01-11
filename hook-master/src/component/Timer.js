import React, {useEffect} from "react";

const Timer = (props) => {

    useEffect(()=>{
        const timer = setInterval(()=> {
            console.log("timer loading...");
        }, 1000);

        return () => {
            //정리작업 내용
            clearInterval(timer);
            console.log('timer가 종료되었습니다!');
        };
    }, []);

    return (
        <div>
            <span>Timer start!</span>
        </div>
    )
}

export default Timer;