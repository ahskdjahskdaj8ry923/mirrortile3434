import Head from 'next/head';

const CleaningAndMaintenance = () => {
  return (
    <div className="container">
      <Head>
        <title>Cleaning and Maintenance</title>
        <meta name="description" content="Guide for cleaning and maintaining mirror tiles" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" /> {/* Include your CSS */}
      </Head>
      <main style={{ fontFamily: 'Arial, sans-serif' }}>
        <div id="Cleaning_And_Maintenance" className="new"></div>
        
        <h2 id="Cleaning_And_Maintenance">Cleaning And Maintenance</h2>
        <div>
          <p style={{ fontWeight: 'bold' }}>Cleaning and Maintaining Mirror Tiles</p>
          <p>Cleaning and maintaining mirror tiles is similar to cleaning any other glass surface.</p>
          <ul>
            <li>Use a microfiber rag and everyday glass cleaning products.</li>
            <li style={{ fontWeight: 'bold' }}>Important:</li>
            Prevent moisture accumulation between tiles to avoid damage.
          </ul>
          <p style={{ fontWeight: 'bold' }}>Tips to Prevent Moisture Buildup:</p>
          <ul>
            <li>Use cleaning solutions sparingly.</li>
            <li>Spray cleaning solution directly onto the rag instead of the glass.</li>
          </ul>
          <p>This prevents excess cleaning product from getting trapped behind the tiles and potentially causing damage.</p>
        </div>

        <div id="Durability,_Replacements,_Glass_Cracking_From_Heat" className="new"></div>
        <h2 id="Durability,_Replacements,_Glass_Cracking_From_Heat">Durability, Replacements, Glass Cracking From Heat</h2>
        <div>
          <p style={{ fontWeight: 'bold' }}>Glass is a fragile building material that requires special care and attention.</p>
          <ul>
            <li>Consider alternative materials in high-traffic areas.</li>
            <li>For mirror tiles used as a kitchen backsplash, ensure they are far from heat sources like stoves.</li>
            <ul>
              <li>Heat can cause the glass to crack, even from a distance.</li>
              <li>Heat can also damage the adhesive.</li>
            </ul>
          </ul>
          <p style={{ fontWeight: 'bold' }}>Testing Heat:</p>
          <ul>
            <li>Use a touch test to gauge the heat.</li>
            <li>For precise measurements, use an infrared thermometer (available online).</li>
          </ul>
        </div>

        <div id="Alternatives_That_Achieve_A_Similar_Look" className="new"></div>
        <h2 id="Alternatives_That_Achieve_A_Similar_Look">Alternatives That Achieve A Similar Look</h2>
        <div>
          <p style={{ fontWeight: 'bold' }}>Alternative Materials for Achieving a Similar Look:</p>
          <ul>
            <li>Larger mirrors (as opposed to smaller tiles)</li>
            <li>Ceramic tiles (typically found in bathrooms and kitchens)</li>
            <li>Porcelain tiles</li>
            <li>Various other tile products</li>
          </ul>
          <p style={{ fontWeight: 'bold' }}>Highly Recommended Option:</p>
          <p>Metal veneer (a thin layer of metal that is easy to install and visually appealing)</p>
          <p style={{ fontWeight: 'bold' }}>Other Classic Options:</p>
          <ul>
            <li>Wood</li>
            <li>Paint</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default CleaningAndMaintenance;
