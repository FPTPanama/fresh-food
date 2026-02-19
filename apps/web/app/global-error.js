'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h1>Algo salió mal</h1>
          <button onClick={() => reset()}>Intentar de nuevo</button>
        </div>
      </body>
    </html>
  );
}
