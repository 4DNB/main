import { useState } from 'react';
import './Button.css'

function Button({ texto }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (

        <div style={{

            // border: '1px solid red',            
        }}>
            <button style={{
            }}
                className="BtnPrincipal"
                onClick={handleClick}
            >
                {count}
            </button>
            
        </div>
    )
}

export default Button;