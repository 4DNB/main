import { useEffect, useState } from "react";
import Button from "./Button";
import './Button.css'
import './Body.css'

const serverUrl = 'http://localhost:5156/Main';

function Body() {
    const [count, setCount] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    let content;

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setCount(0);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        // Limpieza del evento
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    function handleSubmit(e) {
        // Previene que el navegador recargue la página
        e.preventDefault();

        // Lee los datos del formulario
        const form = e.target;
        const formData = new FormData(form);
        // Puedes pasar formData como el cuerpo de la consulta directamente:
        fetch(serverUrl, { method: form.method, body: '"asdasd"', headers: { "Content-Type": "text/json" } });

    }

    function TxtPostgreSQL() {

        if (count === 0) {
            setCount(1)
        } else {
            setCount(0)
        }
    }

    function BtnPostgreSQL() {

        setCount(0)
    }

    if (count % 2 !== 0) {
        content = <div style={{
        }}>
            <div className='fondoNegroTextArea' onClick={BtnPostgreSQL}>
            </div>
            <div className='divTextArea'>
                <div className="fondoTxtAreaPostgre">
                    <div style={{ display: "grid", gridTemplateColumns: "99% 1%", margin: '0', paddingTop: '20px' }}>
                        <h2 style={{ fontSize: "20px", padding: '0', margin: '0', height: '3px' }}>Insertar Comando</h2>
                        <div style={{ display: "flex", justifyContent: "end", margin: '0', padding: '0', height: '0px', width: 'auto' }}>
                            <button className="btnAreaPostgre" onClick={BtnPostgreSQL}>X</button>
                        </div>
                    </div>
                    <form method="post" onSubmit={handleSubmit}>
                        <textarea className='TxtAreaPostgre' name="myInput" defaultValue="Some initial value"></textarea>
                        <div style={{ margin: '0' }}>
                            <button className="btnAreaPostgre" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            ;
    }

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
                alignItems: 'center',
                display: 'grid',
                gridTemplateColumns: 'auto auto auto auto'
                // border: '1px solid black'

            }}>
                <Button texto={"Realizar Backup PostgreSQL"}
                    onclick={TxtPostgreSQL}
                >
                </Button>

                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
                <Button texto={""}></Button>
            </div>
            {content}
        </div>

    )
}

export default Body;