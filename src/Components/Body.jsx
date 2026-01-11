import Button from "./Button";

function Body() {
    return (
        <div style={{
            background: 'linear-gradient(70deg,rgb(132, 248, 108),rgb(255, 189, 68))',
            height: '100vh',
            margin: '0'
        }}>
            <div style={{
                position: 'relative',
                top: '20px',
                justifyContent: 'center',
                display: 'flex'
                
                }}>
                <Button texto={"Realizar Backup PostgreSQL"}></Button>
            </div>
        </div>
    )
}

export default Body;