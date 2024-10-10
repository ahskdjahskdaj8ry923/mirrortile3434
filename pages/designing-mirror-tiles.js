import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Thing1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Design Phase</title>
        <meta name="description" content="Guide to Choosing the Right Mirror Tile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        style={{
          padding: '10px 20px',
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #ddd',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: isMobile ? '10px' : '20px',
          }}
        >
          <Link href="/designing-mirror-tiles">
            <span style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Designing with Tiles
            </span>
          </Link>
          <Link href="/diy-or-professional">
            <span style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Going DIY or Professional
            </span>
          </Link>
          <Link href="/setting-tiles">
            <span style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Installing Tiles
            </span>
          </Link>
          <Link href="/cleaning-and-maintenance">
            <span style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Cleaning and Maintenance
            </span>
          </Link>
        </nav>
      </header>
      <main style={{ fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px' }}>Design Phase</h1>
        <div id="Choosing_The_Right_Type_Of_Mirror_Tile" className="new"></div>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>Choosing The Right Mirror Tile</h2>
        <div>
          <p style={{ fontWeight: 'bold' }}>Antique mirror tiles or aged mirror tiles are a popular look for achieving an artistic aesthetic for your mirror tile project.</p>
          <p>This style is available online, though it's important to make sure that you pick the right style of antiquing. Antique mirror comes in many styles with many color inflections and designs.</p>
          <p style={{ fontStyle: 'italic' }}>Make sure that you're selecting a product that has the same aesthetic as the inspiration that you're looking at or look that you like.</p>
          <p><span style={{ textDecoration: 'underline' }}>It's a good idea to order samples of any product that you'd like.</span> Also, find out whether or not the pattern on the mirror in the case of antique mirror repeats or is unique for each tile. Sometimes, a repeating pattern can have a unique look that isn't desirable for many people.</p>
          <p><span style={{ fontWeight: 'bold' }}>For many colorful mirror tiles, I would make sure they're not plastic or acrylic.</span> As most colorful mirror tiles you'll see online are actually acrylic. Acrylic can have issues and be complicated to work with.</p>
        </div>

        <table border="1" style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif', marginBottom: '32px' }}>
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

        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', marginTop: '32px' }}>Choosing The Right Shape Mirror Tile</h2>
        <div>
          <p style={{ fontWeight: 'bold' }}>Standard Mirror Tile Sizes:</p>
          <ul>
            <li>12 inches by 12 inches</li>
            <li>11 inches by 11 inches</li>
          </ul>
          <p>These sizes are more related to manufacturing processes than aesthetics.</p>
          <p style={{ fontWeight: 'bold' }}>Other Available Sizes:</p>
          <ul>
            <li>Subway tile style (small rectangle): This size is commonly found at home improvement stores like Home Depot and Lowe's. It's a popular choice for both ceramic and mirror tiles.</li>
          </ul>
          <p style={{ fontWeight: 'bold' }}>Tips for Choosing Mirror Tile Sizes:</p>
          <ul>
            <li>Pay close attention to the size of mirror tiles used in inspiration photos.</li>
            <li>Consider how different sizes would look with the other products in your project.</li>
            <li>Verify that the desired sizes are available for purchase, as online inspiration photos may feature sizes not commonly sold.</li>
          </ul>
          <p style={{ fontStyle: 'italic' }}>Remember that the size and shape of your mirror tiles can significantly impact the overall look of your project.</p>
        </div>

        <br />
        
        <figure style={{ textAlign: 'center', marginBottom: '32px' }}>
          <a href="" target="_blank" rel="noopener">
            <img className="aligncenter" title="" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb8e0c18ce21bae7b3e641b6a37ff3f4a.cdn.bubble.io%2Ff1717634941652x221478916136228500%2Fjcm89723i6i768_backsplash_in_home_bar_in_scandinavian_style_hom_3495bf34-4466-40a1-97e1-f32e70220537.png?auto=compress&fit=fill" alt="" style={{ width: '95%', maxWidth: '95%', height: '100%' }} />
          </a>
          <figcaption style={{ fontStyle: 'italic', color: '#666', marginTop: '8px' }}>Square 8" x 8" mirror tiles</figcaption>
        </figure>
        
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>Choosing The Right Edge For Your Tile</h2>
        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '16px' }}>Tile Edge Options:</p>
          <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '16px' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', fontWeight: 'bold', color: '#666', padding: '8px' }}>Edge Type</th>
                <th style={{ textAlign: 'left', fontWeight: 'bold', color: '#666', padding: '8px' }}>Description</th>
                <th style={{ textAlign: 'left', fontWeight: 'bold', color: '#666', padding: '8px' }}>Availability</th>
                <th style={{ textAlign: 'left', fontWeight: 'bold', color: '#666', padding: '8px' }}>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px' }}>Beveled Edge</td>
                <td style={{ padding: '8px' }}>Commonly found online. Bevel width varies: <br/>Smaller tiles: Around 0.5 inches. <br/> Larger tiles: Around 1 inch.</td>
                <td style={{ padding: '8px' }}>Online</td>
                <td style={{ padding: '8px' }}>Generally affordable</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Flat Polished Edge</td>
                <td style={{ padding: '8px' }}>Commonly found online.</td>
                <td style={{ padding: '8px' }}>Online</td>
                <td style={{ padding: '8px' }}>Moderate price range</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Mitered Edge</td>
                <td style={{ padding: '8px' }}>Available at local stores with glass edging capabilities.</td>
                <td style={{ padding: '8px' }}>Local stores</td>
                <td style={{ padding: '8px' }}>Pricier due to specialized finishing</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Seamed Edge</td>
                <td style={{ padding: '8px' }}>Available at local stores with glass edging capabilities.</td>
                <td style={{ padding: '8px' }}>Local stores</td>
                <td style={{ padding: '8px' }}>Least expensive due to "rough" look</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontStyle: 'italic', marginTop: '16px' }}>Note: Online options for tile edges may be limited.</p>
        </div>

        <br />

        <figure style={{ textAlign: 'center', marginBottom: '32px' }}>
          <a href="" target="_blank" rel="noopener">
            <img className="aligncenter" title="" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb8e0c18ce21bae7b3e641b6a37ff3f4a.cdn.bubble.io%2Ff1717836906235x676275968209342200%2Fjcm89723i6i768_backsplash_in_minimal_scandinavian_style_home_po_1e878cc3-6b81-4c61-b815-86e05c5f8cec.png?auto=compress&fit=fill" alt="" style={{ width: '95%', maxWidth: '95%', height: '100%' }} />
          </a>
          <figcaption style={{ fontStyle: 'italic', color: '#666', marginTop: '8px' }}>Bevel subway style mirror tiles</figcaption>
        </figure>
        
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', marginTop: '32px' }}>Choose The Right Finish For Your Tile (antiqued, Colorful, Clear, Etc)</h2>
        <div>
          <p style={{ fontWeight: 'bold' }}>Tiles: Glass vs. Plastic</p>
          <ul>
            <li>"Tiles" can refer to both glass and plastic reflective tiles.</li>
            <li>Glass mirror tiles typically come in 1/8, 3/16, and 1/4 inch thicknesses.</li>
            <ul>
              <li>Thicker glass tiles are harder to bend and slightly heavier.</li>
              <li>Thinner glass tiles are easier to bend and lighter.</li>
            </ul>
            <li>Acrylic (plastic) tiles, even when thick, tend to bend and distort.</li>
            <li>Many colorful reflective mirror tiles are acrylic because colored glass mirrors are hard to find.</li>
          </ul>
        </div>

        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto' }}>
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
