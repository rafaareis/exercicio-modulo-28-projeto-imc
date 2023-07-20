import { useEffect, useState } from "react"


function TituloNav() {
  const endpoint = "./src/components/Tabela/tabelaIMC.json"
  const [tituloArr, setTituloArr] = useState([])
  const [navArr, setNavArr] = useState([])

  useEffect(() => {
    fetch(endpoint)
    .then(res => res.json())
    .then(reJson => {
      setTituloArr(reJson.tituloDaPagina)
      console.log(reJson.tituloDaPagina)
    })
  }, [])

  useEffect(() => {
    fetch(endpoint)
    .then(res => res.json())
    .then(reJson => {
      setNavArr(reJson.navegacao)
      console.log(reJson.navegacao)
    })
  }, [])


    return (
      <>
        <div>
        {tituloArr.map(titulo => {
          return (
            <>
              <div key={titulo.id}>
                <h1>{titulo.name}</h1>
              </div>
            </>
          )
        })}
        </div>
      </>
    )
  }
  
  export default TituloNav