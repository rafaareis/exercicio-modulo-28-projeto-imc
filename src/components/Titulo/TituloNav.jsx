import { useEffect, useState } from "react"
import styles from './TituloNav.module.css'


function TituloNav() {
  const tituloDaPaginaURL = "https://json-server-api-ex-28.vercel.app/tituloDaPagina"
  const navegacaoURL = "https://json-server-api-ex-28.vercel.app/navegacao"
  const [tituloArr, setTituloArr] = useState([])
  const [navArr, setNavArr] = useState([])

  useEffect(() => {
    fetch(tituloDaPaginaURL)
    .then(res => res.json())
    .then(reJson => {
      setTituloArr(reJson)
      console.log(reJson)
    })
  }, [])

  useEffect(() => {
    fetch(navegacaoURL)
    .then(res => res.json())
    .then(reJson => {
      setNavArr(reJson)
      console.log(reJson)
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