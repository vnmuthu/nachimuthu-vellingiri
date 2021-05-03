import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About Muthu</title>
            </Head>
            <main>
                <header>About Me</header>
                <div>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </div>
                <footer>Nachimuthu Vellingiri</footer>
            </main>
            <style jsx>{`
                main {
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                header {
                    width: 100%;
                    padding: 3rem 1rem;
                    color: #1d1d1d;
                    background-color: #ffd278;
                }
            `}</style>
        </Layout>
    )
}