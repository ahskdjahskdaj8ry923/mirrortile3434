import Head from 'next/head';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Your Guide to Mirror Tiles</title>
        <meta name="description" content="Comprehensive guide on mirror tiles for your home" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" /> {/* Include your CSS */}
      </Head>
      <main style={{ fontFamily: 'Arial, sans-serif' }}>
        <h1>Your Guide to Mirror Tiles</h1>
        <p>This is a simple guide for deciding whether or not mirror tiles are the right product to put in your home. My goal is to provide as detailed a webpage as possible, helping you understand all the considerations, starting with design and ending with maintenance.</p>
        <p>I'll also talk in detail about the pros and cons of DIY vs. professional installation. If you have a question not covered on the page, use the "question" box below to send me a question. I'll try to get back to you within one business day.</p>
        
        <h2 id="Table_of_Contents">Table Of Contents</h2>
        <ul>
          <li className="show"><p><a href="#Choosing_The_Right_Type_Of_Mirror_Tile">Choosing The Right Type Of Mirror Tile</a></p></li>
          <li className="show"><p><a href="#Communicating_Your_Ideas_And_Receiving_Bids">Communicating Your Ideas And Receiving Bids</a></p></li>
          <li className="show"><p><a href="#Considerations:_DIY_Vs._Professional">Considerations: DIY Vs. Professional</a></p></li>
          <li className="show"><p><a href="#DIY_Techniques_And_Considerations_(separate_These)">DIY Techniques And Considerations (separate These)</a></p></li>
          <li className="show"><p><a href="#Cleaning_And_Maintenance">Cleaning And Maintenance</a></p></li>
          <li className="show"><p><a href="#Durability_Replacements_Glass_Cracking_From_Heat">Durability Replacements Glass Cracking From Heat</a></p></li>
          <li className="show"><p><a href="#Alternatives_That_Achieve_A_Similar_Look">Alternatives That Achieve A Similar Look</a></p></li>
        </ul>

        <div id="Some_Things_To_Consider_About_Mirror_Tiles" className="new"></div>
        <h2 id="Some_Things_To_Consider_About_Mirror_Tiles">Some Things To Consider About Mirror Tiles</h2>
        <div style={{
          backgroundColor: '#e0f7fa',
          color: '#006064',
          padding: '40px 20px',
          marginBottom: '40px',
          borderRadius: '8px'
        }}>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '24px',
            fontWeight: 300,
            textAlign: 'center'
          }}>
            When it comes to using mirrored tiles in a home installation, there are a few things worth reviewing. Here are some drawbacks of choosing mirrored tiles over other reflective surfaces:
          </p>
          <h3 style={{
            fontSize: '28px',
            marginTop: 0,
            marginBottom: '24px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Affordability vs. Installation Costs
          </h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.6',
              marginBottom: '16px',
              position: 'relative',
              paddingLeft: '25px'
            }}>
              <span style={{ position: 'absolute', left: 0, top: 0 }}>&#9679;</span>
              Mirror tiles are small, making them easy to warehouse and ship. This makes them readily available online and in stores at inexpensive prices.
            </li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.6',
              position: 'relative',
              paddingLeft: '25px'
            }}>
              <span style={{ position: 'absolute', left: 0, top: 0 }}>&#9679;</span>
              However, while the tiles themselves are cheap, the installation process can be expensive. Mirror is a fragile and difficult building material to work with, requiring skilled labor for a polished look.
            </li>
          </ul>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            marginTop: '32px',
            textAlign: 'center'
          }}>
            Continue reading the next section for important factors to consider before beginning your mirror tile project.
          </p>
        </div>
        
        <div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Mirror Tile Project Considerations
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.5',
            marginBottom: '8px'
          }}>
            <strong>1. Distortion:</strong> All mirror tiles have distortion, primarily due to the glue used to bond them to the surface. This creates a high spot in each tile. While thicker glass reduces distortion, it's almost always present.
          </p>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.5',
            marginBottom: '8px'
          }}>
            <strong>2. Installation:</strong> Mirror tile installation is unique compared to other tiled products. Experienced tile setters might not have the specific technique for mirror tiles. Techniques that work for ceramic tiles might not be effective for mirror tiles.
          </p>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.5',
            marginBottom: '8px'
          }}>
            <strong>3. Cost:</strong> Despite being inexpensive, the complexity of installing mirror tiles can make the overall project cost comparable to, or even more expensive than, using a single large mirror.
          </p>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.5',
            marginBottom: '8px'
          }}>
            <strong>4. Fragility:</strong> Mirror tiles, especially those made from thin glass, are fragile and susceptible to breaking due to impacts or heat exposure. This is a common concern for all glass products, but it's more prominent with thinner glass.
          </p>
        </div>

        <h2 className="hidden"></h2>
        <span className="abovecap"></span>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <a href="#" target="_blank" rel="noopener">
            <img
              className="aligncenter"
              title=""
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb8e0c18ce21bae7b3e641b6a37ff3f4a.cdn.bubble.io%2Ff1717729830743x200278486618245900%2Fmirror-distortion.png?auto=compress&fit=fill"
              alt="mirror distortion"
              style={{ width: '95%', maxWidth: '95%', height: 'auto' }}
            />
          </a>
        </div>
        <p className="cap" style={{ textAlign: 'center', fontStyle: 'italic' }}>a classic case of mirror distortion...</p>
      </main>
    </div>
  );
}

export default Home;
