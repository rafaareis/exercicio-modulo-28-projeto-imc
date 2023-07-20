import styles from './Significado.module.css'

function Significado() {

    return (
        <>
            <article className={styles.art}>
                <h2 className={styles.h2Main}>Definição: </h2>
                <p className={styles.par}><b>O Índice de Massa Corporal &#40;IMC&#41;</b> é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Ele é calculado dividindo-se o peso da pessoa em quilogramas pelo quadrado da altura em metros.</p>

                <p className={styles.par}>O IMC é uma medida simples e fácil de ser usada, mas não é perfeita. Ele não leva em consideração a composição corporal da pessoa, ou seja, a quantidade de massa muscular e de massa gorda. Por isso, algumas pessoas com IMC normal podem ter excesso de gordura corporal, enquanto outras com IMC acima do normal podem ter um percentual de gordura corporal saudável.</p>

                <p className={styles.par}>Apesar das limitações, o IMC é uma ferramenta útil para avaliar o risco de doenças relacionadas ao excesso de peso. Pessoas com IMC acima do normal ou obesas têm maior risco de desenvolver doenças cardíacas, diabetes, hipertensão arterial, acidente vascular cerebral, apneia do sono e alguns tipos de câncer.</p>

                <p className={styles.par}>As categorias do IMC são classificadas conforme a tabela abaixo:</p>
            </article>
        </>
    )
}

export default Significado