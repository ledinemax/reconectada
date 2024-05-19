import Header from '../components/Header'
import styles from '../style/pages/vagas.module.css'
import cover from '../assets/vagas.png'

const Vagas = () => {
    return (
        <>
            <Header
                title='Vagas Online'
                image={cover}
            />
            <div className={styles.vaga}>
                <ul className={styles.vagaContainer}>
                    <li className={styles.vagaCard}>
                        <a href="/vaga/front-end" className={styles.vagaLink}>
                            <h3 className={styles.cardTitle}>Desenvolvedora Front-End</h3>
                        </a>
                        <p className={styles.vagaDescription}>Estamos em busca de uma desenvolvedora
                            Front-End para integrar nossa equipe de tecnologia.
                            Requisitos: experiência com HTML, CSS, JavaScript e frameworks como React.js.</p>
                    </li>
                </ul>

                <ul className={styles.vagaContainer}>
                    <li className={styles.vagaCard}>
                        <a href="http://" className={styles.vagaLink}>
                            <h3 className={styles.cardTitle}>Gerente de Projetos</h3>
                        </a>
                        <p className={styles.vagaDescription}>Estamos contratando um(a) gerente de projetos
                            para liderar nossa equipe de desenvolvimento. Requisitos: experiência em gestão
                            de projetos, liderança e habilidades de comunicação.</p>
                    </li>
                </ul>

                <ul className={styles.vagaContainer}>
                    <li className={styles.vagaCard}>
                        <a href="http://" className={styles.vagaLink}>
                            <h3 className={styles.cardTitle}>Analista de Marketing Digital</h3>
                        </a>
                        <p className={styles.vagaDescription}>Estamos procurando um(a) analista de marketing
                            digital para desenvolver estratégias de marketing online e gerenciar campanhas em
                            redes sociais e Google Ads.</p>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Vagas