import React from 'react';
import Head from 'next/head';

const DIYOrProfessional = () => {
  return (
    <div className="container">
      <Head>
        <title>DIY or Hire a Professional?</title>
        <meta name="description" content="Decide whether to install mirror tiles yourself or hire someone to do it" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>🔨 Should You DIY or Hire Someone?</h1>

      {/* Safety Disclaimer */}
      <div style={{
        backgroundColor: '#FFCCCB',
        border: '3px solid #FF0000',
        padding: '20px',
        marginBottom: '30px',
        borderRadius: '8px'
      }}>
        <h3 style={{ color: '#FF0000', fontSize: '1.4em', marginTop: 0 }}>
          ⚠️ SAFETY WARNING FOR DIY PROJECTS ⚠️
        </h3>
        <p style={{ fontSize: '1.1em', lineHeight: '1.6', fontWeight: 'bold' }}>
          DIY mirror tile installation involves serious safety risks:
        </p>
        <ul style={{ fontSize: '1em', lineHeight: '1.6' }}>
          <li><strong>Glass cutting injuries:</strong> Mirror tiles have razor-sharp edges. Wear safety gloves, safety glasses, and closed-toe shoes.</li>
          <li><strong>Chemical exposure:</strong> Adhesives contain toxic fumes. Work in well-ventilated areas and read all safety labels.</li>
          <li><strong>Heavy lifting:</strong> Large installations can cause back injury. Get help lifting and positioning.</li>
          <li><strong>Wall structural damage:</strong> Improper installation can damage walls or cause tiles to fall and shatter.</li>
          <li><strong>Electrical hazards:</strong> Never work near electrical outlets without turning off power first.</li>
        </ul>
        <p style={{ fontSize: '1em', fontStyle: 'italic', color: '#CC0000' }}>
          <strong>Consider hiring a professional if:</strong> You're not experienced with glass work, adhesives, or if the installation area is large or complex. Your safety is worth more than the cost savings.
        </p>
      </div>

      <h2>Getting Ready to Talk to Contractors</h2>
      <p>
        Before you decide to hire someone, it's good to have all your info ready. This helps you get better quotes and makes sure contractors understand what you want.
      </p>

      <div style={{
        backgroundColor: '#FFE4B5',
        border: '5px solid #FF0000',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <h2 style={{ color: '#FF0000', marginTop: 0 }}>📋 Checklist: What to Show Contractors</h2>
        <div style={{ fontSize: '1.1em' }}>
          <p>✅ <strong>Photo of your space</strong> - Show them what you're working with</p>
          <p>✅ <strong>Inspiration photo</strong> - Show them the look you want</p>
          <p>✅ <strong>Tile size example</strong> - Picture or drawing of how big each tile should be</p>
          <p>✅ <strong>Other work happening</strong> - Are you doing other renovations?</p>
          <p>✅ <strong>Location details</strong> - First floor? Basement? Tell them where</p>
          <p>✅ <strong>Wall type</strong> - Drywall? Concrete? They need to know</p>
          <p>✅ <strong>Measurements</strong> - How big is the area you want to cover?</p>
          <p>✅ <strong>Tile size preference</strong> - How big should each mirror tile be?</p>
        </div>
      </div>

      <h2>DIY vs Professional: The Real Deal</h2>
      <div style={{
        backgroundColor: '#F0F8FF',
        border: '3px solid #000080',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          border: '2px solid #000080'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#D3D3D3' }}>
              <th style={{ border: '2px solid #000080', padding: '12px', fontWeight: 'bold' }}>What Matters</th>
              <th style={{ border: '2px solid #000080', padding: '12px', fontWeight: 'bold' }}>Hire a Pro</th>
              <th style={{ border: '2px solid #000080', padding: '12px', fontWeight: 'bold' }}>Do It Yourself</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #000080', padding: '10px', fontWeight: 'bold' }}>💰 Cost</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>More expensive - You pay for their time and skills</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Cheaper - Just buy materials and tools</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ border: '1px solid #000080', padding: '10px', fontWeight: 'bold' }}>⏰ How Long</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Faster - They know what they're doing</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Slower - You'll need to learn and might make mistakes</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #000080', padding: '10px', fontWeight: 'bold' }}>😰 How Hard</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Easy for you - They handle everything</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Hard - Need skills, tools, and patience</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ border: '1px solid #000080', padding: '10px', fontWeight: 'bold' }}>✨ Final Look</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Professional quality - Looks perfect</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Depends on your skills - Might be good enough</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #000080', padding: '10px', fontWeight: 'bold' }}>🛡️ Warranty</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Usually comes with guarantee</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>No warranty - If something breaks, you fix it</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ border: '1px solid #000080', padding: '10px', fontWeight: 'bold' }}>🎨 Custom Work</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Can handle tricky requests</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Limited to your skill level</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #000080', padding: '10px', fontWeight: 'bold' }}>📚 Experience Needed</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>None - They've got this</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>A lot - You need to learn everything</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ border: '1px solid #000080', padding: '10px', fontWeight: 'bold' }}>😤 Stress Level</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>Low stress - Just pay and wait</td>
              <td style={{ border: '1px solid #000080', padding: '10px' }}>High stress - Everything is on you</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>💸 What Makes Professional Installation Cost More?</h2>
      <div style={{
        backgroundColor: '#F5F5DC',
        border: '3px solid #8B4513',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <p style={{ fontWeight: 'bold', color: '#8B4513', fontSize: '1.2em' }}>
          These things will make your project cost more:
        </p>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          border: '2px solid #8B4513',
          marginTop: '15px'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#DEB887' }}>
              <th style={{ border: '1px solid #8B4513', padding: '10px' }}>What Makes It Harder</th>
              <th style={{ border: '1px solid #8B4513', padding: '10px' }}>Why It Costs More</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>Big or weird-shaped tiles</td>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>💰 Harder to handle and install</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>Antique/aged mirror tiles</td>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>💰 More expensive materials</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>Fancy patterns or layouts</td>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>💰 Takes more time and skill</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>Tight spaces (like backsplashes)</td>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>💰 Harder to work in small areas</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>Cutting around outlets or fixtures</td>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>💰 Precise cuts take extra time</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>Wall needs prep work (like fixing brick)</td>
              <td style={{ border: '1px solid #8B4513', padding: '8px' }}>💰 Extra work before tiles can go up</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{
        backgroundColor: '#e0f7fa',
        border: '3px solid #000080',
        padding: '20px',
        textAlign: 'center',
        margin: '30px 0'
      }}>
        <h2 style={{ color: '#000080', marginTop: 0 }}>🤔 Still Not Sure?</h2>
        <p style={{ fontSize: '1.2em' }}>
          <strong>Quick decision helper:</strong>
        </p>
        <p style={{ fontSize: '1.1em' }}>
          👍 <strong>Go DIY if:</strong> Small area, you like learning new things, you have time, and you're not picky about perfection
        </p>
        <p style={{ fontSize: '1.1em' }}>
          👍 <strong>Hire a pro if:</strong> Large area, you want it perfect, you're busy, or you're dealing with expensive tiles
        </p>
      </div>
    </div>
  );
}

export default DIYOrProfessional;
