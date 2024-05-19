import Header from '../components/Header'
import styles from '../style/pages/home.module.css'

import homeIMG from '../assets/home.png'
import plant from '../assets/bottom.png'

const Home = () => {
  return (
    <>
      <Header
        title="ReConectada"
        text='A ReConectada é dedicada a ajudar mulheres a se 
        reconectarem com suas carreiras,
         oferecendo suporte, capacitação e oportunidades de emprego.'
        image={homeIMG}
      />

      <div className={styles.homeContainer}>
        <div className={styles.mainDesc}>
          <h1 className={styles.homeTitle}>Nosso foco de atuação</h1>
          <div className={styles.containerHome}>
            <div className={styles.cardHome}>
              <img width="64" height="64" src="https://img.icons8.com/dusk/64/new-job.png" alt="new-job" className={styles.cardIMG} />
              <h5 className={styles.cardTitle}>Oportunidades de Emprego</h5>
              <p className={styles.cardText}>Conectamos mulheres com empresas
                que valorizam a diversidade e inclusão.</p>
            </div>

            <div className={styles.cardHome}>
              <img width="64" height="64" src="https://img.icons8.com/dusk/64/woman-at-computer.png" alt="mulher no computador" className={styles.cardIMG} />
              <h5 className={styles.cardTitle}>Suporte e Mentoria</h5>
              <p className={styles.cardText}>Apoio individualizado e
                mentoria para ajudar na transição de volta ao mercado de trabalho.</p>
            </div>

            <div className={styles.cardHome}>
              <img width="64" height="64" src="https://img.icons8.com/dusk/64/saving-book.png" alt="livro" className={styles.cardIMG} />
              <h5 className={styles.cardTitle}>Capacitação Profissional</h5>
              <p className={styles.cardText}>Apoio individualizado e mentoria para
                ajudar na transição de volta ao mercado de trabalho.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardMore}>
        <div className={styles.cardDesc}>
          <img className={styles.descImage} src={plant} alt="" />
          <div className={styles.cardInfo}>
            <h1>Empoderando Mulheres, Transformando Carreiras</h1>
            <p className={styles.descText}>
              Na ReConectada, acreditamos que cada mulher merece a
              chance de prosperar em sua carreira. Nossa missão é fornecer
              as ferramentas e o suporte necessários para que as mulheres
              possam alcançar seus objetivos profissionais. Junte-se a nós e
              descubra como podemos ajudar você a se reconectar com sua carreira.</p>
            <a href="./sobre" role='button' className={styles.descBTN}>Saiba Mais</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home