import styles from './Header.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header(){
    return(
        <header className={styles.Header}>
            <img src={igniteLogo} alt='Logo tipo do Ignite' />
        </header>
    )
}