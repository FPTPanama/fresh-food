/* eslint-disable @next/next/no-html-link-for-pages */
export default function NotFound404() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>404</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.25rem' }}>Página no encontrada</p>
        <a
          href="/es"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#16a34a',
            color: 'white',
            borderRadius: '9999px',
            textDecoration: 'none',
          }}
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
