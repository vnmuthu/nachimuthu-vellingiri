import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nachimuthu Vellingiri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/work"><a>Work</a></Link>
          <Link href="/portfolio"><a>Portfolio</a></Link>
          <Link href="/awards"><a>Awards + Mentions</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
        <figure>
          <Image 
          src="/images/profile.png" 
          height={250} 
          width={250} 
          alt="Nachimuthu Vellingiri" />
        </figure>
        <h1 className="title">
          Nachimuthu <Link href="/about"><a>Vellingiri</a></Link>
        </h1>

        <h2>Senior Frontend Developer</h2>

        <p className="description">
        An Analytic Thinker. Naturally curious, have a thirst for knowledge. Even the most sophisticated piece of software will only have its full effect when the people using it can understand it - this is the idea expressed by the schedule, implementation and integration of my projects.
        </p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #1d1d1d;
          background-color: #ffd278; 
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        nav {
          padding: 0 0 5rem;
        }

        nav a {
          padding: 0 1.25rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        nav a:hover {
          color: #00a082;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #00a082;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          color: #000;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          width: 60%;
          font-size: 1rem;
          line-height: 1.5;
          color: #333;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .footer-bg {
          width:100%;
        }

        @media (max-width: 600px) {
          .title {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.25rem;
          }

          img.profile {
            margin-left: 40px;
          }
          
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
