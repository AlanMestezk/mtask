import Link from 'next/link'
import styles from './Header.module.css'

export default function Header(){

    return(

        <header className={styles.header}>
            
            <section className={styles.content}>

                <nav className={styles.nav}>

                    <Link href='/'>
                        
                        <h1 className={styles.logo}>

                            MTask<span>+</span>

                        </h1>
                        
                    </Link>

                    <Link href='/dashboard' className={styles.link}> 

                        Meu painel

                    </Link>

                </nav>

                <button className={styles.button}>Acessar</button>

            </section>

        </header>

    )

}