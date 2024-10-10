import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const SettingTiles = () => {
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
        <title>Setting Tiles</title>
        <meta name="description" content="Guide for DIY Mirror Tile Installation" />
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
        <div id="DIY_Techniques_And_Considerations_(separate_These)" className="new"></div>
        
        <h2 id="Preparing_To_Set_Your_Tiles">Preparing To Set Your Tiles</h2>
        <p>If you want to pursue the DIY route, the steps below are meant to sketch out the process. Each step has a description and then a link to more references. I use Youtube all the time to help understand how to do things. I recommend doing that!</p>
        
        <br />

        <h3>Flat Surface</h3>
        <p>How flat the underlying (also called subsurface) that you plan to mount the mirror on will have a huge effect on how flat the mirror image will appear. A bumpy surface will be much more complicated to work with than a flat one. If you do not know how to evaluate your wall for flatness, then this may not be a great DIY project for you.</p>
        
        <br />

        <h3>Tile Pattern (Fabricating Tiles)</h3>
        <p>The simpler the tile pattern the easier to install. That means using a tile that divides equally into the space that you will be tiling. This is by far the simplest way to install these tiles and make them look good. <br />
        If you do need to fabricate the tiles to make them fit the space, remember that achieving the correct "edge" to match the others will likely require specialized equipment that won't be easy to DIY.</p>
        
        <br />

        <div style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '600px',
          margin: '20px auto',
          border: '1px solid #ccc',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333', textAlign: 'center' }}>Mirror Tile Installation Difficulty Scale</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Difficulty Level</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Description</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Simple</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Small areas (&lt; 2 feet)</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>1-3</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Moderate</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Medium areas (2-3 feet)</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>4-6</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Difficult</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Large areas (&gt; 3 feet)</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>7-8</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Very Difficult</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Very large areas, complex designs</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>9-10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SettingTiles;
