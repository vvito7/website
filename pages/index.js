/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Palavreco</title>
        <link rel="icon" href="/palavreco.png" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <img src="/palavreco.png" width="40" height="40" className="d-inline-block align-top" alt="Palavreco" />
          <p>Palavreco</p>
        </div>
        <div className={styles.navItem}>
          <a href="https://github.com/palavreco/Palavreco">Github &#128279;</a>
        </div>
      </nav>

      <main className={styles.main}>
        <img src="/palavreco.png" alt="Palavreco" width="175" height="175" />
        <br /><br />

        <h1 className={styles.title}>Palavreco</h1>
        <p className={styles.description}>
          O bot de Discord que simula o jogo <a href='https://www.nytimes.com/games/wordle/index.html'>Wordle</a>
        </p>

        <div className={styles.buttons}>
          <a href='https://discord.com/api/oauth2/authorize?client_id=935291567038672906&permissions=273408&scope=bot%20applications.commands'>
            <button type="button" className="btn btn-success">Adicione o Palavreco &rarr;</button>
          </a>
          <a href='https://discord.gg/KEdytHNbK2'>
            <button type="button" className="btn btn-primary">Suporte &rarr;</button>
          </a>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Wordle in-app</h2>
            <p>Uma forma fácil de jogar o famoso jogo Wordle no próprio Discord.</p>
          </div>

          <div className={styles.card}>
            <h2>Simples e rápido</h2>
            <p>Disponível para ser jogado em qualquer aparelho.</p>
          </div>

          <div className={styles.card}>
            <h2>Diversão</h2>
            <p>Divirta-se tentando descobrir a palavra do dia e compartilhe com seus amigos! 😄</p>
          </div>
        </div>

        <footer className={styles.footer}>
          Feito por <a href='https://github.com/ADMVicli'>ADMVicli</a> e <a href='https://github.com/vitorlops'>vitorlops</a> com ❤️<br />Agradecimentos especiais ao <a href='https://github.com/eduraio'>Edu ϟ</a> ⭐
        </footer>
      </main>
    </div>
  )
}
