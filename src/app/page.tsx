import Image    from 'next/image';
import styles   from './page.module.css'
import logoHero from '../../public/assets/hero.png'

export default function Home() {
  return (

    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.logoContent}>

          <Image
            className={styles.hero}
            alt='Logo MTask'
            src={logoHero}
            priority
          />

        </div>

        <h1 className={styles.title}>Sistema feito para você organizar seu dia</h1>

        <div className={styles.infoContent}>

          <section className={styles.box}>

            <span>+ 12 Posts</span>

          </section>

          <section className={styles.box}>

            <span>+ 90 Comentários</span>

          </section>

        </div>

      </main>
      
    </div>
  );
}
