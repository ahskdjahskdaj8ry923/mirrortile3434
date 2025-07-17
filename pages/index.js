import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Your Guide to Mirror Tiles</title>
        <meta name="description" content="Easy guide on mirror tiles for your home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to Your Mirror Tile Guide!</h1>
      <p>
        Thinking about adding mirror tiles to your home? This guide will help you figure out if they're right for you. 
        We'll walk you through everything from picking the right tiles to keeping them clean.
      </p>
      <p>
        We'll also help you decide whether to install them yourself or hire someone. 
        Got questions? Just ask - we'll get back to you within one business day!
      </p>
      
      <h2 id="Sections">What You'll Learn</h2>
      <div style={{
        backgroundColor: '#e0f7fa',
        border: '3px solid #000080',
        padding: '20px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1em' }}>
          <li style={{ marginBottom: '15px' }}>
            <Link href="/designing-mirror-tiles" style={{ 
              color: '#000080', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              fontSize: '1.2em'
            }}>
              🎨 How to Pick the Right Tiles
            </Link>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <Link href="/diy-or-professional" style={{ 
              color: '#000080', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              fontSize: '1.2em'
            }}>
              🔨 DIY or Hire a Pro?
            </Link>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <Link href="/setting-tiles" style={{ 
              color: '#000080', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              fontSize: '1.2em'
            }}>
              📐 How to Install Them
            </Link>
          </li>
          <li>
            <Link href="/cleaning-and-maintenance" style={{ 
              color: '#000080', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              fontSize: '1.2em'
            }}>
              🧽 Keeping Them Clean
            </Link>
          </li>
        </ul>
      </div>

      <h2>Things to Think About First</h2>
      <div style={{
        backgroundColor: '#FFE4B5',
        border: '3px solid #FF0000',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
          Mirror tiles can make your room look bigger and brighter, but there are some things you should know first:
        </p>
        
        <h3 style={{ color: '#FF0000', fontSize: '1.3em' }}>
          Cheap Tiles, But Installation Can Be Pricey
        </h3>
        <ul style={{ fontSize: '1em', lineHeight: '1.5' }}>
          <li>
            ✅ <strong>Good news:</strong> Mirror tiles are small and cheap to buy online or at stores.
          </li>
          <li>
            ⚠️ <strong>But watch out:</strong> Installing them properly can cost a lot because mirrors are tricky to work with.
          </li>
        </ul>
      </div>

      {/* Safety Disclaimer */}
      <div style={{
        backgroundColor: '#FFCCCB',
        border: '3px solid #FF0000',
        padding: '20px',
        marginBottom: '30px',
        borderRadius: '8px'
      }}>
        <h3 style={{ color: '#FF0000', fontSize: '1.4em', marginTop: 0 }}>
          🚨 IMPORTANT SAFETY WARNING 🚨
        </h3>
        <p style={{ fontSize: '1.1em', lineHeight: '1.6', fontWeight: 'bold' }}>
          Working with mirror tiles can be dangerous. Please read these safety warnings:
        </p>
        <ul style={{ fontSize: '1em', lineHeight: '1.6' }}>
          <li><strong>Sharp edges:</strong> Mirror tiles have extremely sharp edges that can cause serious cuts. Always wear safety gloves.</li>
          <li><strong>Glass fragments:</strong> Broken mirror tiles create dangerous glass shards. Wear safety glasses and closed-toe shoes.</li>
          <li><strong>Chemical adhesives:</strong> Mirror tile adhesives contain strong chemicals. Use in well-ventilated areas and follow manufacturer safety instructions.</li>
          <li><strong>Heavy materials:</strong> Large installations can be heavy. Ensure proper wall support and consider professional installation.</li>
          <li><strong>Electrical safety:</strong> Never install near electrical outlets without turning off power and consulting an electrician.</li>
        </ul>
        <p style={{ fontSize: '1em', fontStyle: 'italic', color: '#CC0000' }}>
          <strong>Disclaimer:</strong> This guide is for informational purposes only. We are not responsible for injuries or damage. 
          When in doubt, consult a professional contractor. DIY projects involving glass and adhesives carry inherent risks.
        </p>
      </div>
      
      <div style={{
        backgroundColor: '#F0F8FF',
        border: '2px solid #000080',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h2 style={{ fontSize: '1.5em', marginTop: 0 }}>
          Quick Facts You Should Know
        </h2>
        <div style={{ fontSize: '1em', lineHeight: '1.6' }}>
          <p>
            <strong>1. They Won't Look Perfect:</strong> All mirror tiles bend a little, so your reflection might look slightly wavy. Thicker tiles are better but cost more.
          </p>
          <p>
            <strong>2. Installation is Tricky:</strong> Even experienced tile installers might struggle with mirrors. They need special techniques.
          </p>
          <p>
            <strong>3. Total Cost Adds Up:</strong> While the tiles are cheap, the final project might cost as much as a big mirror.
          </p>
          <p>
            <strong>4. They Break Easily:</strong> Thin mirror tiles can crack from bumps or heat, so handle with care.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <img
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fb8e0c18ce21bae7b3e641b6a37ff3f4a.cdn.bubble.io%2Ff1717729830743x200278486618245900%2Fmirror-distortion.png?auto=compress&fit=fill"
          alt="mirror distortion example"
          style={{ 
            width: '90%', 
            maxWidth: '500px', 
            height: 'auto',
            border: '5px solid #000000',
            boxShadow: '5px 5px 10px #888888'
          }}
        />
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#696969' }}>
          See how the reflection looks wavy? That's normal with mirror tiles.
        </p>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h2>Other Options to Consider</h2>
        <div style={{
          backgroundColor: '#F5F5DC',
          border: '2px solid #8B4513',
          padding: '20px'
        }}>
          <p style={{ fontWeight: 'bold', color: '#8B4513' }}>Instead of mirror tiles, you could try:</p>
          <ul style={{ fontSize: '1em' }}>
            <li>One big mirror (easier to install)</li>
            <li>Regular ceramic or porcelain tiles</li>
            <li>Metal sheets (shiny and easy to put up)</li>
            <li>Just paint the wall a nice color</li>
            <li>Wood paneling for a classic look</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
