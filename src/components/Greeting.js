import { useState } from 'react';

const Greeting = () => {

    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    };

    return (
        <div>
            <h2>Hello World!</h2>
            {/* <p>It's good to see you!</p> */}
            {!changedText ? <p>It's good to see you!</p>
            : <p>Changed!</p>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
}

export default Greeting;