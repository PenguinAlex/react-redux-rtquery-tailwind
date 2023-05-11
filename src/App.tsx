import React, { useState } from 'react';
import Score from "./components/Score";

function App() {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>My Clicker Game</h1>
            <p>Count: {count}</p>
            <button onClick={handleButtonClick}>Click me!</button>
            <Score score={count}/>
        </div>
    );
}

export default App;