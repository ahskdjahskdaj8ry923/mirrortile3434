import Head from 'next/head';

export default function Thing1() {
  return (
    <div className="container">
      <Head>
        <title>Thing 1</title>
        <meta name="description" content="Welcome to Page 1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" /> {/* Include your CSS */}
      </Head>
      <main>
        <h1>Welcome to Page 2</h1>
      </main>
    </div>
  );
}
