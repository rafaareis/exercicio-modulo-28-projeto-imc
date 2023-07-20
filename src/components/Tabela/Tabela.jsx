import { useEffect, useState } from "react"
import styles from './Tabela.module.css'

function Tabela() {
    const endpoint = "./src/components/Tabela/tabelaIMC.json"
    const [tabelaArr, setTabelaArr] = useState([]);


    useEffect(() => {
        fetch(endpoint)
        .then(res => res.json())
        .then(reJson => {
            setTabelaArr(reJson.tabelaDeIMC)
            // console.log(reJson.tabelaDeIMC)
        })
    }, [])

    return (
        <>
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
        </>
    )
}

export default Tabela