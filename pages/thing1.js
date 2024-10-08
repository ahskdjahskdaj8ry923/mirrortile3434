import Head from 'next/head';

export default function Thing1() {
  return (
    <div className="container">
      <Head>
        <title>Thing 1</title>
        <meta name="description" content="Welcome to the Thing 1 Page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" /> {/* Include your CSS */}
      </Head>
      <main>
        <h1>Welcome to Thing 1 Page</h1>
      </main>
    </div>
  );
}
