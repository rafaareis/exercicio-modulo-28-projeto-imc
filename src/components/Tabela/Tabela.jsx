import { useEffect, useState } from "react"
import styles from './Tabela.module.css'

function Tabela() {
    const endpoint = "./src/components/Tabela/tabelaIMC.json"
    const [tabelaArr, setTabelaArr] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);


    useEffect(() => {
        fetch(endpoint)
        .then(res => res.json())
        .then(reJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setTabelaArr(reJson.tabelaDeIMC)
            }, 2000)
            
            // console.log(reJson.tabelaDeIMC)
        })
    }, [])

    return (
        <>
            {estaCarregando ? (
                    <h1>Carregando ...</h1>
            ): (
                <>
                <article className={styles.tabela_art}>
                <h1 
                    className={styles.tableTitle}
                    id="tabela"
                >
                    Tabela de níveis de IMC
                </h1>
                <table className={styles.IMCtable}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nível de IMC &#40;kg/m&sup2;&#41;</th>
                            <th>Classificação</th>
                            <th>Grau de Obesidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {tabelaArr.map(tableItem => {
                        return (
                            <>
                            <tr key={tableItem.id}>
                                <td>{tableItem.id}</td>
                                <td>{tableItem.imcNivel}</td>
                                <td>{tableItem.classificacao}</td>
                                <td>{tableItem.grauObesidade}</td>
                            </tr>
                            </>
                            )
                        
                        })}
                    
                    </tbody>
                </table>
                </article>            

            </>
            )}
        </>
    )
}

export default Tabela