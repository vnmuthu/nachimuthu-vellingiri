import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>meet-muthu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <figure>
          <img className="profile" src="/images/profile.png" alt="Nachimuthu Vellingiri"></img>
        </figure>
        <h1 className="title">
          Nachimuthu <a href="javascript:void(0);">Vellingiri</a>
        </h1>

        <h2>Senior Frontend Developer</h2>

        <p className="description">
        An Analytic Thinker. Naturally curious, have a thirst for knowledge. Even the most sophisticated piece of software will only have its full effect when the people using it can understand it—this is the idea expressed by the schedule, implementation and integration of my projects.
        </p>

        {/* <div className="grid">
          <a href="#" className="card">
            <h3>Work Experience &rarr;</h3>
            <p>Find my professional experience</p>
          </a>

          <a href="#" className="card">
            <h3>Portofolio &rarr;</h3>
            <p>Find my contributions to brands</p>
          </a>

          <a
            href="#"
            className="card"
          >
            <h3>Testimonials &rarr;</h3>
            <p>Testimonials</p>
          </a>

          <a
            href="#"
            className="card"
          >
            <h3>Accompliments &rarr;</h3>
            <p>Awards</p>
          </a>
        </div> */}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #000;
          background-color: #ffc244;
        }

        img.profile {
          width: 70%;
          margin-left: 60px;
        }

        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          width: 70%;
          font-size: 1rem;
          line-height: 1.5;
          color: #444;
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

        @media (max-width: 600px) {
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
