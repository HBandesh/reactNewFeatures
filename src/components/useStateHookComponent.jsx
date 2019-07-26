import React, { useState } from "react";

export const UseStateHook = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);

    return(
        <React.Fragment>
            <p>Counter : {count}</p>
            <button type="button" onClick={increaseCount}>Click Me To Increase Counter</button>
        </React.Fragment>
    );
}