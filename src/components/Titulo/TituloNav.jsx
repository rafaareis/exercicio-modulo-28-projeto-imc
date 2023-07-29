import { useEffect, useState } from "react"
import styles from './TituloNav.module.css'


function TituloNav() {
  const endpoint = "./src/components/Tabela/tabelaIMC.js"
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
        <div className={styles.navTitle}>
        {tituloArr.map(titulo => {
          return (
            <>
              <div 
                className={styles.title}
                key={titulo.id}
              >
                <h1>{titulo.name}</h1>
              </div>
            </>
          )
        })}
          <nav className={styles.navigation}>
          {navArr.map(navItem => {
            return (
              <> 
                  <ul 
                    className={styles.navUl}
                    key={navItem.id}>
                    <li><a href={`#${navItem.idName}`}>{navItem.name}</a></li>
                  </ul>
              </>
            )
          })}
          </nav>
        </div>
      </>
    )
  }
  
  export default TituloNav