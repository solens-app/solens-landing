export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Solens — Something went wrong</title>
    <style>
      :root { color-scheme: dark; }
      html, body { margin: 0; height: 100%; background: #0a0a0c; color: #f4f4f5; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      main { min-height: 100%; display: flex; align-items: center; justify-content: center; padding: 2rem; }
      .card { max-width: 28rem; text-align: center; }
      h1 { font-size: 1.25rem; font-weight: 600; letter-spacing: -0.01em; margin: 0 0 0.75rem; }
      p { color: #a1a1aa; font-size: 0.9rem; line-height: 1.55; margin: 0 0 1.5rem; }
      a { display: inline-flex; align-items: center; gap: 0.5rem; background: #7005fc; color: #fff; text-decoration: none; font-size: 0.85rem; font-weight: 500; padding: 0.6rem 1rem; border-radius: 999px; box-shadow: 0 0 40px -8px rgba(112,5,252,0.9); }
      a:hover { background: #5a04ce; }
    </style>
  </head>
  <body>
    <main>
      <div class="card">
        <h1>This page didn't load</h1>
        <p>Something went wrong on our end. Refresh the page or head back home — we'll be back shortly.</p>
        <a href="/">Reload Solens</a>
      </div>
    </main>
  </body>
</html>`;
}
