import React, {useState, useRef, useEffect} from "react";

const RefCount = () => {
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);

    useEffect(()=>{
        renderCount.current = renderCount.current + 1;
        console.log('렌더링 수: ', renderCount.current);
    });
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count+1)}>UP!</button>
        </div>
    );
};

export default RefCount;