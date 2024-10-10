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
        <meta name="description" content="Comprehensive Guide for DIY Mirror Tile Installation" />
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
          <h2 id="preparing-to-set-your-tiles">Preparing to Set Your Tiles</h2>
          <p>
            Installing mirror tiles can dramatically enhance the aesthetic of any room by adding depth
            and light. If you're considering a DIY approach, this guide will walk you through the
            essential steps to ensure a successful installation.
          </p>
        </section>

        <section>
          <h3>Tools and Materials You'll Need</h3>
          <ul>
            <li>Mirror tiles</li>
            <li>Measuring tape</li>
            <li>Level</li>
            <li>Pencil or chalk</li>
            <li>Adhesive suitable for mirrors (mirror mastic or adhesive strips)</li>
            <li>Notched trowel (if using mastic)</li>
            <li>Glass cutter (if tiles need to be cut)</li>
            <li>Safety gear (gloves, safety glasses)</li>
            <li>Soft cloth</li>
          </ul>
        </section>

        <section>
          <h3>1. Ensure a Flat Surface</h3>
          <p>
            The flatness of the wall (also called the subsurface) is crucial for a smooth mirror
            installation. An uneven surface can cause the mirrors to crack or reflect distorted images.
            To check for flatness:
          </p>
          <ul>
            <li>
              Use a long level or straight edge against the wall to identify any dips or bumps.
            </li>
            <li>
              Sand down high spots and fill in low spots with suitable wall filler.
            </li>
            <li>
              Clean the wall thoroughly to remove dust, grease, and debris.
            </li>
          </ul>
          <p>
            <strong>Tip:</strong> If you're unsure about assessing the wall's flatness, consider
            consulting a professional.
          </p>
        </section>

        <section>
          <h3>2. Plan Your Tile Layout</h3>
          <p>
            A well-thought-out layout ensures a professional finish. Here's how to plan:
          </p>
          <ul>
            <li>Measure the wall dimensions (height and width).</li>
            <li>
              Determine the size of the mirror tiles and calculate how many you'll need.
            </li>
            <li>
              Decide on a tile pattern (straight, staggered, diagonal) that suits your design vision.
            </li>
            <li>
              Mark guidelines on the wall using a level and pencil to keep tiles aligned.
            </li>
          </ul>
          <p>
            <strong>Tip:</strong> Starting from the center of the wall and working outward can create
            a symmetrical look.
          </p>
        </section>

        <section>
          <h3>3. Cutting the Tiles (If Necessary)</h3>
          <p>
            For areas where full tiles won't fit, you'll need to cut mirror tiles to size:
          </p>
          <ul>
            <li>Measure the space where the tile will fit.</li>
            <li>
              Mark the cut line on the tile using a straight edge and a non-permanent marker.
            </li>
            <li>
              Use a glass cutter to score along the line, applying even pressure.
            </li>
            <li>
              Snap the tile gently along the scored line.
            </li>
          </ul>
          <p>
            <strong>Caution:</strong> Always wear safety glasses and gloves when cutting glass to
            protect yourself from shards.
          </p>
        </section>

        <section>
          <h3>4. Applying Adhesive</h3>
          <p>
            Choosing the right adhesive is vital to prevent damage to the mirror backing:
          </p>
          <ul>
            <li>
              Use a mirror mastic or adhesive specifically designed for mirrors to avoid
              discoloration.
            </li>
            <li>
              If using adhesive strips, ensure they are rated for the weight of the mirror tiles.
            </li>
          </ul>
          <p>To apply adhesive:</p>
          <ul>
            <li>
              Apply the mastic to the back of the tile in a few evenly spaced dollops, keeping it away
              from the edges to prevent squeeze-out.
            </li>
            <li>
              For large tiles, spread the adhesive with a notched trowel for even coverage.
            </li>
            <li>
              Avoid getting adhesive on the mirror surface. Wipe off any excess immediately with a soft
              cloth.
            </li>
          </ul>
        </section>

        <section>
          <h3>5. Setting the Tiles</h3>
          <p>
            Now it's time to place the tiles onto the wall:
          </p>
          <ul>
            <li>
              Begin at your starting point (usually the center or bottom center of the wall).
            </li>
            <li>
              Press each tile firmly against the wall, applying even pressure.
            </li>
            <li>
              Use spacers if you want consistent gaps between tiles for grouting (optional).
            </li>
            <li>
              Continuously check the alignment with your guidelines and adjust as needed.
            </li>
            <li>
              Allow the adhesive to set according to the manufacturer's instructions before
              proceeding.
            </li>
          </ul>
        </section>

        <section>
          <h3>6. Finishing Touches</h3>
          <p>
            After all tiles are set and the adhesive is cured:
          </p>
          <ul>
            <li>
              If you've left gaps between tiles, you can fill them with a non-acidic, neutral-cure
              silicone sealant instead of traditional grout to prevent damaging the mirror edges.
            </li>
            <li>
              Clean the mirror surfaces with a glass cleaner to remove fingerprints and smudges.
            </li>
          </ul>
          <p>
            <strong>Tip:</strong> Regular maintenance will keep your mirror tiles looking pristine.
          </p>
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
          <p style={{ textAlign: 'center' }}>
            Use this scale to assess the complexity of your project before you begin.
          </p>
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
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Small areas (&lt; 2 feet), basic patterns, no cutting required.</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>1-3</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>Moderate</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Medium areas (2-3 feet), simple cuts, standard patterns.</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>4-6</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>Difficult</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Large areas (&gt; 3 feet), intricate cuts, complex patterns.</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>7-8</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>Very Difficult</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Very large areas, custom designs, requires professional tools.</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>9-10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 id="additional-tips">Additional Tips for Success</h2>
          <ul>
            <li>
              <strong>Practice First:</strong> If you're new to installing mirror tiles, practice on a
              small, inconspicuous area or a piece of plywood to get comfortable with the process.
            </li>
            <li>
              <strong>Temperature and Humidity:</strong> Install tiles in appropriate conditions as
              extreme temperatures or humidity can affect the adhesive.
            </li>
            <li>
              <strong>Avoid Adhesive Contact with Mirror Edges:</strong> Adhesive can potentially
              damage the silver backing of mirrors if it comes into contact with the edges. Apply
              carefully.
            </li>
            <li>
              <strong>Get Help if Needed:</strong> Mirror tiles can be heavy and fragile. Having an
              extra pair of hands can make the installation safer and more precise.
            </li>
          </ul>
        </section>

        <section>
          <h2 id="when-to-contact-a-professional">When to Contact a Professional</h2>
          <p>
            While DIY projects can be rewarding, some situations are better handled by professionals:
          </p>
          <ul>
            <li>If the project involves large or heavy mirror panels.</li>
            <li>If electrical outlets or light fixtures need to be worked around.</li>
            <li>If the wall surface is severely uneven or damaged.</li>
            <li>If you're unsure about any step of the process.</li>
          </ul>
          <p>
            Hiring a professional ensures the job is done safely and correctly, potentially saving you
            time and money in the long run.
          </p>
        </section>
      </main>
    </div>
  );
}

export default InstallingMirrorTiles;
