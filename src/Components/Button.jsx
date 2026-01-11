import './Button.css'

function Button({ texto }) {
    return (
        <div style={{ 
            
            // border: '1px solid red',            
         }}>
            <button style={{
            }}
                className="BtnPrincipal"
            >
                {texto}
            </button>
        </div>
    )
}

export default Button;