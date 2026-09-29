// Importando o hook useState
import {useState} from "react"

// Importando o módulo de CSS
import styles from "@/components/Semaforo/Semaforo.module.css" 

// Componente Semaforo
const Semaforo = () => {

    // Criando um estado "cor" para o componente
    const [cor, setCor] = useState("cinza");

    return (
        <>
        {/* Div Containeer - Exemplo de CCS INLINE */} 
            <div style={
                {
                    height: "100vh",
                    display: "flex",
                    backgroundColor: "#f0f0f0",
                    flexDirection: "column",
                    alignItems: "center"
                }
            }>
                <h3>Semáforo com React</h3>
                <br />
                <div className={`${styles.luz} ${ cor == 'vermelho' ? styles.vermelho : styles.cinza}`}></div>
                <div className={`${styles.luz} ${ cor == 'amarelo' ? styles.amarelo : styles.cinza}`}></div>
                <div className={`${styles.luz} ${ cor == 'verde' ? styles.verde : styles.cinza}`}></div>
                <div className={`${styles.luz} ${ cor == 'laranja' ? styles.laranja : styles.cinza}`}></div>
                <br />
                <div>
                    {/* className="nomeDaClasse" : usamos para classes globais */}
                    <button className= "button" onClick={() => setCor("vermelho")}>Pare!</button>
                    <button className="button" onClick={() => setCor("amarelo")}>Atenção!</button>
                    <button className="button" onClick={() => setCor("verde")}>Prossiga!</button>
                    <button className="button" onClick={() => setCor("laranja")}>Laranja</button>
                </div>
            </div>
        </>
    )
 }

export default Semaforo;