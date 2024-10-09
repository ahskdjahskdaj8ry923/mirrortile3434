import Head from 'next/head';

const BuildingPhase = () => {
  return (
    <div className="container">
      <Head>
        <title>Building Phase</title>
        <meta name="description" content="Learn about building, planning, and installing mirror tiles" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" /> {/* Include your CSS */}
      </Head>
      <main style={{ fontFamily: 'Arial, sans-serif' }}>
        <h1>Building Phase</h1>

        <div id="Communicating_Your_Ideas_And_Receiving_Bids" className="new"></div>
        <h2 id="Communicating_Your_Ideas_And_Receiving_Bids">Communicating Your Ideas And Receiving Bids</h2>
        <p>When you are trying to figure out if a project is even worth doing -- or budgeting -- then making a plan for presenting the information to contractors is a great first step. See the checklist below for the information you will need to have handy when discussing this project with a professional</p>

        <div style={{ width: '80%', margin: 'auto', borderRadius: '10px', backgroundColor: '#f0f0f0', padding: '20px' }}>
          <h2 id="Checklist_When_Looking_for_a_Quote">Checklist for Getting a Quote from a Professional</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><input type="checkbox" /> A photo of the space</li>
            <li><input type="checkbox" /> An inspo photo for how you'd like the space to look</li>
            <li><input type="checkbox" /> An inspo photo or drawing that shows the dimension of the mirror tile and look itself</li>
            <li><input type="checkbox" /> Information about other construction going on in the location</li>
            <li><input type="checkbox" /> The location of the space being worked on in your home (first floor, etc)</li>
            <li><input type="checkbox" /> The type of wall (stucco, drywall, etc)</li>
            <li><input type="checkbox" /> Overall size of the space</li>
            <li><input type="checkbox" /> Size of each individual tile</li>
          </ul>
        </div>

        <div id="Considerations:_DIY_Vs._Professional" className="new"></div>
        <h2 id="Considerations:_DIY_Vs._Professional">Installation Considerations: DIY Vs. Professional</h2>
        <div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Criteria</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Professional Installation</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>DIY Installation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Cost</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>Higher - Professional fees and material markup</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>Lower - Only material costs and tools</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Timing</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>Faster - With scheduling and experience</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>Slower - Due to lack of experience and possible errors</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Difficulty of Installation</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>Low - Experts handle the process</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>High - Requires skill, precision, and tools</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Quality of Finish</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>High - Professional quality and finish</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>Variable - Depends on skill level</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Warranty</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>Usually provided by professionals</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>None - Responsible for any fixes yourself</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Customization</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>High - Experts can handle custom requests</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>Limited - Dependent on personal skill</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Experience Required</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>None - Handled by professionals</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>High - Need to learn and practice</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Stress Level</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>Low - Managed by professionals</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>High - Managing the project yourself</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="Installation_Costs">Professional Installation Costs</h2>
        <div>
          <table border="1" cellpadding="10" cellspacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={{ textAlign: 'left' }}>Factors</th>
                <th style={{ textAlign: 'left' }}>Effect on Project Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Irregular shaped or large mirror tiles</td>
                <td>Increases cost</td>
              </tr>
              <tr>
                <td>Antiqued mirror</td>
                <td>Increases cost</td>
              </tr>
              <tr>
                <td>Complex shapes or tile patterns</td>
                <td>Increases cost</td>
              </tr>
              <tr>
                <td>Fitting the tiles into an enclosed space (like a backsplash)</td>
                <td>Increases cost</td>
              </tr>
              <tr>
                <td>Cut outs for notches, outlets, or any other fabrication</td>
                <td>Increases cost</td>
              </tr>
              <tr>
                <td>Installing on a surface that needs to be prepped before mirror tiles can be mounted to it (like brick)</td>
                <td>Increases cost</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default BuildingPhase;
