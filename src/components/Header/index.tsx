import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'
import Image from "next/image";

export function Header1() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="my.news" width="120px" height="120px"/>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}