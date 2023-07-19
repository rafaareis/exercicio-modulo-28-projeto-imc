import { useEffect, useState } from "react"

function Tabela() {
    const endpoint = "src/components/Tabela/tabelaIMC.json"
    const [tabelaArr, setTabelaArr] = useState({});


    useEffect(() => {
        fetch(endpoint)
        .then(res => res.json())
        .then(reJson => {
            
            setTabelaArr(reJson)
            console.log(reJson)
        })
    }, [])

    return (
        <>
            <h2>Tabela</h2>
        </>
    )
}

export default Tabela