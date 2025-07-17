import Link from 'next/link'

export default function Header({ title }) {
  return (
    <>
      <header style={{
        backgroundColor: '#000080',
        color: '#FFFFFF',
        padding: '15px 10px',
        textAlign: 'center',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
          textShadow: '2px 2px 4px #000000',
          margin: '0',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          lineHeight: '1.2'
        }}>
          {title}
        </h1>
      </header>
      
      <nav style={{
        backgroundColor: '#D3D3D3',
        padding: '12px 5px',
        textAlign: 'center',
        marginTop: '80px',
        position: 'sticky',
        top: '80px',
        zIndex: 50,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Link href="/" style={{
          color: '#000080',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
          padding: '8px 12px',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          border: '2px solid #000080',
          display: 'inline-block',
          minWidth: 'fit-content',
          whiteSpace: 'nowrap'
        }}>
          🏠 HOME
        </Link>
        <Link href="/designing-mirror-tiles" style={{
          color: '#000080',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
          padding: '8px 12px',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          border: '2px solid #000080',
          display: 'inline-block',
          minWidth: 'fit-content',
          whiteSpace: 'nowrap'
        }}>
          🎨 DESIGN
        </Link>
        <Link href="/diy-or-professional" style={{
          color: '#000080',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
          padding: '8px 12px',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          border: '2px solid #000080',
          display: 'inline-block',
          minWidth: 'fit-content',
          whiteSpace: 'nowrap'
        }}>
          🔨 DIY VS PRO
        </Link>
        <Link href="/setting-tiles" style={{
          color: '#000080',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
          padding: '8px 12px',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          border: '2px solid #000080',
          display: 'inline-block',
          minWidth: 'fit-content',
          whiteSpace: 'nowrap'
        }}>
          📐 INSTALL
        </Link>
        <Link href="/cleaning-and-maintenance" style={{
          color: '#000080',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
          padding: '8px 12px',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          border: '2px solid #000080',
          display: 'inline-block',
          minWidth: 'fit-content',
          whiteSpace: 'nowrap'
        }}>
          🧽 CARE
        </Link>
      </nav>
    </>
  )
}
