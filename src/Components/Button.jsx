import './Button.css'

function Button({ texto, onclick }) {

    return (

        <div style={{

            // border: '1px solid red',            
        }}>
            <button style={{
            }}
                className="BtnPrincipal"
                onClick={onclick}
            > 
            
                {texto}
            </button>
        </div>
    )
}

export default Button;