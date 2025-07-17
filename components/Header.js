import Link from 'next/link'

export default function Header({ title }) {
  return (
    <>
      <header style={{
        backgroundColor: '#000080',
        color: '#FFFF00',
        padding: '20px 0',
        textAlign: 'center',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{
          fontSize: '2.5em',
          textShadow: '2px 2px 4px #000000',
          margin: '0',
          fontFamily: 'Arial, sans-serif'
        }}>
          {title}
        </h1>
      </header>
      
      <nav style={{
        backgroundColor: '#D3D3D3',
        padding: '10px 0',
        textAlign: 'center',
        marginTop: '120px',
        position: 'sticky',
        top: '120px',
        zIndex: 50
      }}>
        <Link href="/" style={{
          color: '#000080',
          margin: '0 15px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}>
          🏠 HOME
        </Link>
        <Link href="/designing-mirror-tiles" style={{
          color: '#000080',
          margin: '0 15px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}>
          🎨 DESIGN
        </Link>
        <Link href="/diy-or-professional" style={{
          color: '#000080',
          margin: '0 15px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}>
          🔨 DIY VS PRO
        </Link>
        <Link href="/setting-tiles" style={{
          color: '#000080',
          margin: '0 15px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}>
          📐 INSTALL
        </Link>
        <Link href="/cleaning-and-maintenance" style={{
          color: '#000080',
          margin: '0 15px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}>
          🧽 CARE
        </Link>
      </nav>
    </>
  )
}
