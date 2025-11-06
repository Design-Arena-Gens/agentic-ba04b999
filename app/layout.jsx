export const metadata = {
  title: 'Agentic App',
  description: 'Deployed on Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#0b1020', color: '#e6e9ef' }}>
        {children}
      </body>
    </html>
  );
}
