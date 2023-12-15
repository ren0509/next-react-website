import styles from 'styles/module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebookF,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Sosial() {
    return (
        <ul className={styles.list}>
            <li>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="sr-onry">Twitter</span>
                </a>
            </li>
            <
        </ul>
    )
}