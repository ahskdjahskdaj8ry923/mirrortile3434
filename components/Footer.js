export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#000080',
      color: '#FFFF00',
      padding: '20px 0',
      textAlign: 'center',
      marginTop: '40px',
      borderTop: '5px solid #FFFF00',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <p style={{
          fontSize: '1.2em',
          fontWeight: 'bold',
          margin: '0 0 10px 0',
          textTransform: 'uppercase'
        }}>
          🪞 MIRROR TILES GUIDE 🪞
        </p>
        <p style={{
          fontSize: '0.9em',
          margin: '0 0 10px 0'
        }}>
          Your complete resource for mirror tile installation, design, and maintenance
        </p>
        <p style={{
          fontSize: '0.8em',
          margin: '0',
          fontStyle: 'italic'
        }}>
          © 2024 Mirror Tiles Guide | Made with ❤️ for DIY enthusiasts
        </p>
      </div>
    </footer>
  )
}
