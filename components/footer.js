import Container from 'components/container'
import Logo from './logo'
import styles from 'styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container large>
            <div className={styles.flexContainer}>
                    <Logo />
                    [social]
            </div>
            </Container>    
        </footer>
    )
}