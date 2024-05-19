import Header from '../components/Header'
import styles from '../style/pages/sobre.module.css'
import cover from '../assets/sobre.png'


const Sobre = () => {


  return (
    <>
      <Header
        title='Quem Somos?'
        text='ReConectada é uma organização dedicada a apoiar mulheres 
        que estão retornando ao mercado de trabalho. Fundada em 2022, 
        nossa missão é capacitar, inspirar e conectar mulheres com 
        oportunidades de emprego, promovendo a igualdade e a inclusão 
        no ambiente de trabalho.'
        image={cover}
      />
      <div className={styles.mainContainer}>
        <div className={styles.mainCard}>
          <div className={styles.values}>
            <h2 className={styles.valuesTitle}>VALORES QUE NOS GUIAM</h2>
            <ul className={styles.valuesList}>
              <li className={styles.valuesText}><b>Empoderamento: </b>Acreditamos na capacidade
                das mulheres de alcançar seus objetivos profissionais e pessoais.</li>
              <li className={styles.valuesText}><b>Inclusão: </b> Promovemos um ambiente
                de trabalho inclusivo e diverso, onde todas as mulheres se sintam valorizadas.</li>
              <li className={styles.valuesText}><b>Capacitação: </b> Oferecemos programas
                de formação e desenvolvimento para preparar as mulheres para o mercado de trabalho.</li>
              <li className={styles.valuesText}><b>Parcerias: </b> Colaboramos com empresas, ONGs e comunidades locais para criar oportunidades de emprego significativas.</li>
            </ul>
          </div>
        </div>
        <div className={styles.containerFocus}>
          <h2 className={styles.titleFocus}>Nosso foco</h2>
          <ul className={styles.focusCard}>
            <li className={styles.focusTextList}><b>Programas de Mentoria: </b>
              Conectamos mulheres com mentoras experientes para orientação e apoio.</li>
            <li className={styles.focusTextList}><b>Capacitação Profissional: </b>
              Oferecemos cursos e workshops para desenvolver habilidades técnicas e comportamentais.</li>
            <li className={styles.focusTextList}><b>Parcerias com Empresas: </b>
              Trabalhamos com empresas para criar oportunidades de emprego e estágios.</li>
            <li className={styles.focusTextList}><b>Redes de Apoio: </b>
              Criamos comunidades de apoio onde as mulheres podem compartilhar experiências e conhecimentos.</li>

          </ul>
        </div>

        
      </div>
    </>
  )
}

export default Sobre