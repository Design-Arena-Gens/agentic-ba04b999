import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: 720, width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24, boxShadow: '0 6px 30px rgba(0,0,0,0.25)' }}>
        <h1 style={{ marginTop: 0, marginBottom: 8, fontSize: 32 }}>Test App</h1>
        <p style={{ marginTop: 0, opacity: 0.9 }}>
          This is a minimal Next.js app. Use the health endpoint to verify uptime.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <a href="/api/health" style={{ padding: '10px 14px', background: '#1b233f', color: 'white', textDecoration: 'none', borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)' }}>GET /api/health</a>
          <Link href="https://nextjs.org" target="_blank" style={{ padding: '10px 14px', background: 'transparent', color: 'white', textDecoration: 'none', borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)' }}>Learn Next.js</Link>
        </div>
      </div>
    </main>
  );
}
