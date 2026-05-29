import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "قرآن في كل زمان ومكان",
  description: "تطبيق الاستماع إلى القرآن الكريم",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#d4af37",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Favicon for desktop browsers */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-192.png" />
        {/* iOS / Safari PWA */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="قرآن" />
        {/* PWA manifest */}
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Windows tile */}
        <meta name="msapplication-TileColor" content="#d4af37" />
        <meta name="msapplication-TileImage" content="/icon-192.png" />
        <meta name="msapplication-square70x70logo" content="/icon-192.png" />
        <meta name="msapplication-square150x150logo" content="/icon-192.png" />
        <meta name="msapplication-wide310x150logo" content="/icon-512.png" />
        <meta name="msapplication-square310x310logo" content="/icon-512.png" />
        <meta name="application-name" content="قرآن في كل زمان ومكان" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(){});
                  navigator.serviceWorker.getRegistration().then(function(reg){
                    if (reg) {
                      navigator.serviceWorker.getRegistrations().then(function(regs){
                        regs.forEach(function(r){ r.update(); });
                      });
                    }
                  });
                });
              }
              (function(){
                var retryCount = 0;
                var checkInterval = setInterval(function(){
                  retryCount++;
                  if (retryCount > 10) { clearInterval(checkInterval); return; }
                  var body = document.body;
                  if (body && body.textContent) {
                    var text = body.textContent.substring(0, 500);
                    if (text.indexOf('PreconditionFailed') !== -1 || text.indexOf('pending state') !== -1 || text.indexOf('try later') !== -1) {
                      clearInterval(checkInterval);
                      if (retryCount < 5) {
                        var s = document.createElement('style');
                        s.textContent = 'body{display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:Cairo,sans-serif;color:#fff;background:#1a2a3a;flex-direction:column;gap:15px}body *{display:none}body::after{content:"جارٍ تحميل التطبيق...";font-size:1.1rem;color:#d4af37}body::before{content:"⟳";font-size:2rem;color:#d4af37;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}';
                        document.head.appendChild(s);
                        caches.keys().then(function(names){
                          return Promise.all(names.map(function(n){ return caches.delete(n); }));
                        }).then(function(){ location.reload(); });
                      }
                    }
                  }
                }, 1000);
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
