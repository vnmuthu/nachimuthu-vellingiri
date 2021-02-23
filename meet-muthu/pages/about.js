import Head from 'next/head'
import Link from 'next/link'

export default function About() {
    return (
        <div className="container">
            <Head>
                <title>About Muthu</title>
            </Head>
            <h1>About Me</h1>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
        </div>
      )
}