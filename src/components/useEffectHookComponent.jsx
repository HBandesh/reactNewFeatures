import React, { useEffect, useState } from "react";

export const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const myRef = React.createRef();

    const increaseCount = () => setCount(count + 1);

    useEffect(() => {
        myRef.current.innerHTML = `This is useEffect Counter : ${count + 1}`
    });

    return(
        <React.Fragment>
            <p ref={myRef}>This is useEffect Counter : 0</p>
            <p>Counter : {count}</p>
            <button type="button" onClick={increaseCount}>Click Me To Increase Counter</button>
        </React.Fragment>
    );
}