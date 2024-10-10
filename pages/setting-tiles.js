import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const InstallingMirrorTiles = () => {
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
        <title>Installing Mirror Tiles</title>
        <meta name="description" content="Guide for DIY Mirror Tile Installation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        style={{
          padding: '1em',
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #ddd',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: isMobile ? '0.5em' : '1em',
          }}
        >
          <Link href="/designing-mirror-tiles">
            <a style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Designing with Tiles
            </a>
          </Link>
          <Link href="/diy-or-professional">
            <a style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Going DIY or Professional
            </a>
          </Link>
          <Link href="/setting-tiles">
            <a style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Installing Tiles
            </a>
          </Link>
          <Link href="/cleaning-and-maintenance">
            <a style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Cleaning and Maintenance
            </a>
          </Link>
        </nav>
      </header>
      <main style={{ fontFamily: 'Arial, sans-serif', padding: '1em' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Installing Mirror Tiles</h1>
        <section>
          <h2 id="Preparing_To_Set_Your_Tiles">Preparing To Set Your Tiles</h2>
          <p>If you want to pursue the DIY route, the steps below are meant to sketch out the process. Each step has a description and then a link to more references. I use Youtube all the time to help understand how to do things. I recommend doing that!</p>
        </section>

        <section>
          <h3>Flat Surface</h3>
          <p>How flat the underlying (also called subsurface) that you plan to mount the mirror on will have a huge effect on how flat the mirror image will appear. A bumpy surface will be much more complicated to work with than a flat one. If you do not know how to evaluate your wall for flatness, then this may not be a great DIY project for you.</p>
        </section>

        <section>
          <h3>Tile Pattern (Fabricating Tiles)</h3>
          <p>The simpler the tile pattern the easier to install. That means using a tile that divides equally into the space that you will be tiling. This is by far the simplest way to install these tiles and make them look good.<br /><br />
          If you do need to fabricate the tiles to make them fit the space, remember that achieving the correct "edge" to match the others will likely require specialized equipment that won't be easy to DIY.</p>
        </section>

        <section style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '100%',
          margin: '1em auto',
          border: '1px solid #ccc',
          padding: '1em',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ color: '#333', textAlign: 'center' }}>Mirror Tile Installation Difficulty Scale</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '0.5em', backgroundColor: '#f2f2f2' }}>Difficulty Level</th>
                  <th style={{ border: '1px solid #ddd', padding: '0.5em', backgroundColor: '#f2f2f2' }}>Description</th>
                  <th style={{ border: '1px solid #ddd', padding: '0.5em', backgroundColor: '#f2f2f2' }}>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>Simple</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Small areas (&lt; 2 feet)</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>1-3</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>Moderate</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Medium areas (2-3 feet)</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>4-6</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>Difficult</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Large areas (&gt; 3 feet)</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>7-8</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>Very Difficult</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Very large areas, complex designs</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>9-10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default InstallingMirrorTiles;
