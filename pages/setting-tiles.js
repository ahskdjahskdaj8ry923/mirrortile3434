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
            <li>Mirror adhesive (mirror mastic) or double-sided mirror tape</li>
            <li>Notched trowel (if using mastic)</li>
            <li>Tile spacers (1/16" recommended)</li>
            <li>Glass cutter (if tiles need to be cut)</li>
            <li>Safety gear (gloves, safety glasses)</li>
            <li>Soft cloth</li>
            <li>Painter's tape</li>
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
              Determine the size of the mirror tiles and calculate how many you'll need, including
              accounting for 1/16" gaps between tiles.
            </li>
            <li>
              Decide on a tile pattern (straight, staggered, diagonal) that suits your design vision.
            </li>
            <li>
              Mark horizontal and vertical guidelines on the wall using a level and pencil to keep tiles aligned.
            </li>
            <li>
              Dry-fit the tiles on the floor or a large table, including spacers, to visualize the layout.
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
            <li>Measure the space where the tile will fit, accounting for spacers and gaps.</li>
            <li>
              Mark the cut line on the tile using a straight edge and a non-permanent marker.
            </li>
            <li>
              Use a glass cutter to score along the line, applying even pressure.
            </li>
            <li>
              Snap the tile gently along the scored line.
            </li>
            <li>
              Smooth any sharp edges with fine-grit sandpaper or a rubbing stone.
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
              discoloration and ensure a secure bond.
            </li>
            <li>
              Avoid using acid-based adhesives or those containing solvents like ammonia or vinegar.
            </li>
          </ul>
          <p>To apply adhesive:</p>
          <ul>
            <li>
              Lay the mirror tile face down on a clean, soft surface.
            </li>
            <li>
              Apply the mastic to the back of the tile in vertical lines or in a serpentine pattern, keeping it about 1 inch away from the edges to prevent squeeze-out.
            </li>
            <li>
              Ensure an even layer of adhesive to prevent voids that could cause breakage or poor adhesion.
            </li>
            <li>
              For larger tiles, use a notched trowel to spread the adhesive evenly.
            </li>
          </ul>
          <p>
            <strong>Note:</strong> Do not apply adhesive too close to the edges, and avoid getting adhesive on the mirror surface. Wipe off any excess immediately with a soft cloth if accidental contact occurs.
          </p>
        </section>

        <section>
          <h3>5. Using Tile Spacers and Accounting for Thermal Expansion</h3>
          <p>
            Allowing for a 1/16" gap between mirror tiles is essential to accommodate thermal expansion and prevent cracking:
          </p>
          <ul>
            <li>
              Use 1/16" tile spacers between each tile to maintain consistent gaps.
            </li>
            <li>
              Ensure spacers are placed at each corner where tiles meet.
            </li>
            <li>
              Avoid pushing tiles too tightly together, which can lead to breakage over time.
            </li>
            <li>
              Remove spacers once the adhesive has set enough to hold the tiles in place (refer to adhesive instructions).
            </li>
          </ul>
          <p>
            <strong>Tip:</strong> For adhesive that takes longer to set, consider using painter's tape to hold tiles in position until the adhesive cures.
          </p>
        </section>

        <section>
          <h3>6. Setting the Tiles</h3>
          <p>
            Now it's time to place the tiles onto the wall:
          </p>
          <ul>
            <li>
              Begin at your starting point (usually the center or bottom center of the wall) and follow your guidelines.
            </li>
            <li>
              Carefully align the first tile using the level to ensure it's perfectly straight.
            </li>
            <li>
              Press the tile firmly against the wall, applying even pressure to eliminate air pockets.
            </li>
            <li>
              Place tile spacers along the edges before positioning the next tile.
            </li>
            <li>
              Continue the process, checking alignment frequently and adjusting as needed.
            </li>
            <li>
              For tiles above the initial row, support may be needed until the adhesive sets. Use small nails or temporary supports if necessary, being careful not to damage the wall.
            </li>
          </ul>
          <p>
            <strong>Reminder:</strong> Work patiently and avoid rushing. Taking your time ensures a better finish.
          </p>
        </section>

        <section>
          <h3>7. Allow Adhesive to Cure</h3>
          <p>
            Once all the tiles are in place:
          </p>
          <ul>
            <li>
              Refer to the adhesive manufacturer's instructions for curing time. This can range from a few hours to 48 hours.
            </li>
            <li>
              Avoid touching or applying pressure to the tiles during this time.
            </li>
            <li>
              Ensure the area is well-ventilated to facilitate drying.
            </li>
          </ul>
        </section>

        <section>
          <h3>8. Grouting the Gaps (Optional)</h3>
          <p>
            If you want to fill the gaps between the mirror tiles:
          </p>
          <ul>
            <li>
              Use a non-acidic, neutral-cure silicone sealant to prevent damage to the mirror edges.
            </li>
            <li>
              Load the sealant into a caulking gun for precise application.
            </li>
            <li>
              Apply the sealant into the gaps, ensuring complete coverage.
            </li>
            <li>
              Smooth the sealant with a gloved finger or a caulking tool for a neat finish.
            </li>
            <li>
              Wipe away any excess sealant from the mirror surface immediately with a soft cloth.
            </li>
          </ul>
          <p>
            <strong>Note:</strong> Traditional grout is not recommended as it can scratch the mirror surface and damage the backing.
          </p>
        </section>

        <section>
          <h3>9. Finishing Touches</h3>
          <p>
            After all tiles are set and the adhesive and sealant (if used) are fully cured:
          </p>
          <ul>
            <li>
              Clean the mirror surfaces with a gentle, non-abrasive glass cleaner to remove fingerprints and smudges.
            </li>
            <li>
              Install any trim or edging if desired to frame the mirror tiles and protect the edges.
            </li>
            <li>
              Dispose of any leftover materials safely, especially sharp shards from tile cuts.
            </li>
          </ul>
          <p>
            <strong>Tip:</strong> Regular maintenance will keep your mirror tiles looking pristine. Wipe them down periodically to prevent dust and grime buildup.
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
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Small areas (&lt; 2 feet), basic patterns, no cutting required, minimal obstacles.</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>1-3</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>Moderate</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Medium areas (2-3 feet), simple cuts, standard patterns, some obstacles.</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>4-6</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>Difficult</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Large areas (&gt; 3 feet), intricate cuts, complex patterns, multiple obstacles (outlets, switches).</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>7-8</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em', textAlign: 'center' }}>Very Difficult</td>
                  <td style={{ border: '1px solid #ddd', padding: '0.5em' }}>Very large areas, custom designs, requires professional tools or skills, structural considerations.</td>
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
              <strong>Work Safely:</strong> Wear appropriate safety gear, and make sure your work area is clear of tripping hazards.
            </li>
            <li>
              <strong>Double-Check Measurements:</strong> Measure twice, cut once to avoid waste and ensure a perfect fit.
            </li>
            <li>
              <strong>Plan for Electrical Outlets and Fixtures:</strong> Cutouts for outlets or fixtures require precise measurements and careful cutting.
            </li>
            <li>
              <strong>Use Quality Materials:</strong> Invest in good-quality mirror tiles and adhesives for a long-lasting installation.
            </li>
            <li>
              <strong>Maintain Cleanliness:</strong> Keep your hands and tools clean to avoid smudging the mirror surfaces during installation.
            </li>
          </ul>
        </section>

        <section>
          <h2 id="when-to-contact-a-professional">When to Contact a Professional</h2>
          <p>
            While DIY projects can be rewarding, some situations are better handled by professionals:
          </p>
          <ul>
            <li>If the project involves large or heavy mirror panels that are difficult to handle safely.</li>
            <li>If precise cutting around intricate shapes or obstacles is required.</li>
            <li>If electrical outlets or light fixtures need to be worked around, especially if electrical work is needed.</li>
            <li>If the wall surface is severely uneven, damaged, or requires structural modifications.</li>
            <li>If you're unsure about any step of the process or lack the necessary tools.</li>
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
