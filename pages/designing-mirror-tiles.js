import Head from 'next/head';

export default function Thing1() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0 auto', maxWidth: '800px' }}>
      <Head>
        <title>Designing With Mirror Tiles </title>
        <meta name="description" content="Guide to Choosing the Right Mirror Tile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px' }}>Design Phase</h1>
        
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>Choosing The Right Mirror Tile</h2>
        <div>
          <table border="1" style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif' }}>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '8px' }}>Attribute</th>
              <th style={{ padding: '8px' }}>1/8" Glass Mirror Tiles</th>
              <th style={{ padding: '8px' }}>3/16" Glass Mirror Tiles</th>
              <th style={{ padding: '8px' }}>1/4" Glass Mirror Tiles</th>
              <th style={{ padding: '8px' }}>Acrylic Mirror Tiles</th>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Cost</td>
              <td style={{ padding: '8px' }}>Low</td>
              <td style={{ padding: '8px' }}>Medium</td>
              <td style={{ padding: '8px' }}>High</td>
              <td style={{ padding: '8px' }}>Low</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Bending (Distortion)</td>
              <td style={{ padding: '8px' }}>Low</td>
              <td style={{ padding: '8px' }}>Very Low</td>
              <td style={{ padding: '8px' }}>Very Low</td>
              <td style={{ padding: '8px' }}>High</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Weight</td>
              <td style={{ padding: '8px' }}>Light</td>
              <td style={{ padding: '8px' }}>Medium</td>
              <td style={{ padding: '8px' }}>Heavy</td>
              <td style={{ padding: '8px' }}>Very Light</td>
            </tr>
          </table>
        </div>
        
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', marginTop: '32px' }}>Choosing The Right Shape Mirror Tile</h2>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>Choosing The Right Edge For Your Tile</h2>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>Choose The Right Finish For Your Tile (antiqued, Colorful, Clear, Etc)</h2>
        
        <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
          <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>Cost Comparison of Different Types of Mirrors</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px', backgroundColor: '#f2f2f2' }}>Type of Mirror</th>
                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px', backgroundColor: '#f2f2f2' }}>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Acrylic Mirror</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Less Expensive</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Clear Mirror</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Moderately Expensive</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Antiqued Mirror</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Most Expensive</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Colorful Mirror</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Most Expensive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
