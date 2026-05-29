import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "قرآن في كل زمان ومكان",
  description: "تطبيق الاستماع إلى القرآن الكريم",
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="قرآن" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
