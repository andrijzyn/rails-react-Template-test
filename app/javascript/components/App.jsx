import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount((prevCount) => prevCount + 1);

    return (
        <div>
            <p>You clicked {count} times!</p>
            <button onClick={incrementCount}>Click me</button>
        </div>
    );
}

export default App;
