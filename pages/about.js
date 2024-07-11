import Head from 'next/head';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Page</title>
        <meta name="description" content="Welcome to the About Page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" /> {/* Include your CSS */}
      </Head>
      <main>
        <h1>Welcome to the About Page</h1>
      </main>
    </div>
  );
}
