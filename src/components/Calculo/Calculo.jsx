import { useEffect, useState } from "react";
import styles from './Calculo.module.css'

function Calculo() {
    const endpoint = "./src/components/Tabela/tabelaIMC.json"
    const [meuPeso, setMeuPeso] = useState('');
    const [minhaAltura, setMinhaAltura] = useState('');
    const [resArr, setResArr] = useState([]);
    const [imcResults, setImcResults] = useState('');
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        fetch(endpoint)
        .then(res => res.json())
        .then(reJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setResArr(resultado);                
                setResArr(reJson.tabelaDeIMC);
            }, 3000)
            
        })
    }, [])


    useEffect(() => {
        const resultadoIMC = parseFloat(meuPeso / ((minhaAltura/100)**2)).toFixed(2)

        setImcResults(resultadoIMC)

    }, [meuPeso, minhaAltura])

    const imcCalc = () => {
        
        if(meuPeso === "" && minhaAltura === "") {
            return `X`;
        } else if (meuPeso === "") {
            return `X`
        } else if (minhaAltura === "") {
            return `X`
        } else {
            if(imcResults <= 18.50) {
                return 1
            } else if (imcResults > 18.50 && imcResults <= 25.00 ) {
                return 2
            } else if (imcResults > 25.00 && imcResults <= 30.00 ) {
                return 3
            } else if (imcResults > 30.00 && imcResults <= 40.00 ) {
                return 4
            } else if (imcResults > 40.00) {
                return 5
            } else {
                return 0
            }
        }

    }

    const resultado = imcCalc()


    return (
        <>
            <div className={styles.calc}>
                <div 
                    className={styles.calculo_title}
                    id="calculo"
                >
                    <h1>Cálculo do IMC:</h1>
                </div>
                <div className={styles.calculo_content}>
                    <form>
                        <input
                            className={styles.input}
                            type="number"
                            onClick={(e) => setMeuPeso(e.target.value)}
                            placeholder="Insira o seu peso em kg"
                            min="40"
                            
                        />
                        <input
                            className={styles.input} 
                            type="number" 
                            onClick={(e) => setMinhaAltura(e.target.value)}
                            placeholder="Insira a sua altura em cm"
                            min="100"
                        />
                    </form>
                    <div className={styles.imc}>
                    {resArr.map((resp, index) => {
                        if(meuPeso === "" && index === 0 || minhaAltura === "" && index === 0) {
                            return `x`
                        } else if(resp.id === resultado) {
                            return imcResults
                        }
                    })}
                        
                        <footer>
                            kg/m&sup2;
                        </footer>
                    </div>

                    {resArr.map((resp, index) => {
                        if(meuPeso === "" && index === 0 || minhaAltura === "" && index === 0) {
                            return (
                                <div  
                                    key={resp.id}
                                    className={styles.nivel}>
                                    <header>Nível IMC</header>
                                    X
                                </div>
                            )
                        }
                    })}

                    {resArr.map(resp => {
                        if(resp.id === resultado) {
                            return (
                                <div 
                                    key={resp.id}
                                    className={styles.nivel}
                                >
                                    <header>Nível IMC</header>
                                    {resp.id}
                                    <footer>
                                        {resp.classificacao}
                                    </footer>
                                </div>
                            )
                        }
                    })}


                </div>

                {resArr.map((resp, index) => {
                    if(meuPeso === "" && index === 0 || minhaAltura === "" && index === 0) {
                        return (
                            <>
                                <h1>Preencha acima os dados de peso e altura</h1>
                            </>
                        )
                        
                    }
                })}

                {resArr.map((resp) => {                        
                        if(resp.id === resultado) {
                                return (
                                <>
                                    <div key={resp.id}
                                        className={styles.calculo_recommendation}
                                    >
                                        <h2>Recomendações:</h2>
                                        <p>O seu grau de obesidade é {resp.grauObesidade}. {resp.recomendacao}</p>
                                    </div>
                                </>
                            )
                            }
                        }
                )
                }
            </div>
        </>
    )
}

export default Calculo