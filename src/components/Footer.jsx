import styles from '../style/components/footer.module.css'

const Footer = ({ content }) => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerContent}>{content}</p>
    </footer>
  )
}

export default Footer

