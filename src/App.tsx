import React from 'react';
import Button from "./components/Button";
import Counter from "./components/Counter";

const App = () => {
    return (
        <div>
            <Button label="Click me" onClick={() => alert('Button clicked!')} />
            <Counter />
        </div>
    );
};

export default App;